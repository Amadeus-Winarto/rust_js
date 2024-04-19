import {
  AssignmentContext,
  BlockContext,
  ClosureContext,
  Cond_exprContext,
  Constant_declarationContext,
  Derefed_nameContext,
  ExpressionContext,
  Function_applicationContext,
  Function_declarationContext,
  If_expressionContext,
  Immutable_refed_nameContext,
  Mutable_refed_nameContext,
  NameContext,
  Parameter_listContext,
  ProgramContext,
  Refed_nameContext,
  Return_expressionContext,
  StatementContext,
  Variable_declarationContext,
} from "../grammars/Rust2Parser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import type { TypeTag } from "./types";
import {
  Validator,
  Scope,
  TypeAnnotation,
  PrimitiveTypeTag,
  value_to_type_tag,
  is_integer,
  is_float,
  is_bool,
  is_promotable,
  is_comparison_operator,
  make_reference,
  type_tag_to_value,
  is_borrow,
  unwrap_reference,
  make_mutable_reference,
  is_mutable_borrow,
} from "./types";
import { print, add_to_scope, get_type, Result } from "../utils";
import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";
import { is_prebuilt_function, PreBuiltFunctions } from "../preamble/preamble";

class TypeError extends Error {
  constructor(message: string, line_number: number) {
    super(`Line ${line_number}: ${message}`);
    this.name = "TypeError";
  }
}

const get_unary_type_checker = (operator: string) => {
  switch (operator) {
    case "!":
      return is_bool;
    case "-":
      return (type: TypeTag) => is_integer(type) || is_float(type);
    default:
      return () => false;
  }
};

function to_eager(type: TypeTag): TypeTag {
  if (type === PrimitiveTypeTag.integer_literal) {
    return PrimitiveTypeTag.i32;
  } else if (type === PrimitiveTypeTag.float_literal) {
    return PrimitiveTypeTag.f32;
  }
  return type;
}

type NameType = {
  name: NameContext;
  num_deref: number;
};

function get_underlying_name_deref(
  maybe_name: NameContext | undefined,
  maybe_derefed_name: Derefed_nameContext | undefined,
): NameType | undefined {
  let num_deref = 1;
  let underlying_name: NameContext | undefined;

  if (maybe_name === undefined && maybe_derefed_name === undefined) {
    return undefined;
  }

  if (maybe_derefed_name !== undefined) {
    let curr_name = maybe_derefed_name;
    while (true) {
      num_deref++;

      const next_derefed_name = curr_name.derefed_name();
      if (next_derefed_name === undefined) {
        underlying_name = curr_name.name();
        break;
      }
      curr_name = next_derefed_name;
    }
  } else {
    underlying_name = maybe_name;
  }

  return underlying_name === undefined
    ? undefined
    : {
        name: underlying_name,
        num_deref: num_deref,
      };
}

type BlockResults = {
  block_type: TypeAnnotation;
  return_type: TypeAnnotation;
};
type MovedScope = string[];

function is_moved(moved_scopes: MovedScope[], name: string): boolean {
  return moved_scopes.some((scope) => scope.includes(name));
}

class TypeProducer
  extends AbstractParseTreeVisitor<Result<TypeAnnotation>>
  implements RustVisitor<Result<TypeAnnotation>>
{
  private scope: Scope[] = [];
  private moved_scope: MovedScope[] = [];
  private print_fn: (message?: any, ...optionalParams: any[]) => void;
  private return_types: TypeAnnotation[][] = [];
  private block_results: BlockResults[] = [];

  constructor(private debug_mode: boolean) {
    super();
    this.print_fn = print(debug_mode);
  }

  defaultResult(): Result<TypeAnnotation> {
    return {
      ok: true,
      value: new TypeAnnotation(PrimitiveTypeTag.unknown),
    };
  }

  aggregateResult(
    aggregate: Result<TypeAnnotation>,
    nextResult: Result<TypeAnnotation>,
  ): Result<TypeAnnotation> {
    if (!aggregate.ok) {
      return aggregate;
    } else if (!nextResult.ok) {
      return nextResult;
    }

    return {
      ok: true,
      value: nextResult.value,
    };
  }

  visitProgram(ctx: ProgramContext): Result<TypeAnnotation> {
    this.print_fn("Checking program type");
    this.scope = [new Map()];
    this.moved_scope = [new Array()];

    // Initialise with common types and functions
    for (const [function_name, function_data] of PreBuiltFunctions.entries()) {
      add_to_scope(this.scope, function_name, function_data.type);
    }
    return this.visitChildren(ctx);
  }

  visitReturn_expression(
    ctx: Return_expressionContext,
  ): Result<TypeAnnotation> {
    this.print_fn("Checking return expression type");
    const expr = this.visitExpression(ctx.expression());
    if (!expr.ok) {
      return expr;
    }

    // Save the return type for the block
    const return_type = expr.value;
    this.return_types[this.return_types.length - 1].push(return_type);

    return {
      ok: true,
      value: new TypeAnnotation(PrimitiveTypeTag.empty, ""),
    };
  }

  visitStatement(ctx: StatementContext): Result<TypeAnnotation> {
    const maybe_const_decl = ctx.constant_declaration();
    if (maybe_const_decl !== undefined) {
      return this.visitConstant_declaration(maybe_const_decl);
    }

    const maybe_var_decl = ctx.variable_declaration();
    if (maybe_var_decl !== undefined) {
      return this.visitVariable_declaration(maybe_var_decl);
    }

    const maybe_return_expr = ctx.return_expression();
    if (maybe_return_expr !== undefined) {
      return this.visitReturn_expression(maybe_return_expr);
    }

    const maybe_return = ctx.expression();
    if (maybe_return !== undefined) {
      return this.visitExpression(maybe_return);
    }

    return {
      ok: false,
      error: new TypeError(
        `unknown statement type ${ctx.text}`,
        ctx.start.line,
      ),
    };
  }

  visitBlock(ctx: BlockContext): Result<TypeAnnotation> {
    this.print_fn("Checking block type: ", ctx.text);
    this.scope.push(new Map());
    this.moved_scope.push([]);
    this.return_types.push([]);

    // Check all statements
    const statement_problems = ctx
      .statement()
      .map((statement) => this.visit(statement))
      .filter((result) => {
        return !result.ok;
      });

    if (statement_problems.length > 0) {
      return statement_problems[0];
    }

    // Check that all return types are the same
    const return_types = this.return_types.pop();
    if (return_types === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `return types is undefined. This is a bug in the TypeValidator!`,
          ctx.start.line,
        ),
      };
    }

    if (return_types.length > 0) {
      const return_type = return_types[0];
      if (!return_types.every((t) => is_promotable(t.type, return_type.type))) {
        this.print_fn("Failed return types: ", return_types);
        return {
          ok: false,
          error: new TypeError(
            `all return types in block must be the same but got ${return_types}`,
            ctx.start.line,
          ),
        };
      }
    }

    // Check expression if it exists
    const maybe_expr = ctx.expression();
    const empty_type: Result<TypeAnnotation> = {
      ok: true,
      value: new TypeAnnotation(PrimitiveTypeTag.empty),
    };
    const curr_block_type: Result<TypeAnnotation> =
      maybe_expr === undefined ? empty_type : this.visit(maybe_expr);
    this.scope.pop();
    this.moved_scope.pop();

    if (!curr_block_type.ok) {
      return curr_block_type;
    }

    // Save the block type for the function
    this.block_results.push({
      block_type: curr_block_type.value,
      return_type:
        return_types.length > 0
          ? return_types[0]
          : new TypeAnnotation(PrimitiveTypeTag.empty, ""),
    });
    return curr_block_type;
  }

  visitConstant_declaration(
    ctx: Constant_declarationContext,
  ): Result<TypeAnnotation> {
    const name = ctx.const_name().text;
    const type = new TypeAnnotation(value_to_type_tag(ctx.type().text));
    const expression_type = this.visit(ctx.expression());
    if (!expression_type.ok) {
      return expression_type;
    }

    if (!is_promotable(expression_type.value.type, type.type)) {
      return {
        ok: false,
        error: new TypeError(
          `constant '${name}' declared with type ${type.type} but got ${expression_type.value.type}`,
          ctx.start.line,
        ),
      };
    }
    add_to_scope(this.scope, name, type);
    return {
      ok: true,
      value: new TypeAnnotation(PrimitiveTypeTag.empty),
    };
  }

  visitVariable_declaration(
    ctx: Variable_declarationContext,
  ): Result<TypeAnnotation> {
    const expression_type = this.visitExpression(ctx.expression());
    if (!expression_type.ok) {
      return expression_type;
    }

    // Check if expression is a name with type borrow
    if (
      ctx.expression().name() !== undefined &&
      (is_borrow(expression_type.value.type) ||
        expression_type.value.type === PrimitiveTypeTag.function ||
        expression_type.value.type === PrimitiveTypeTag.join_handle)
    ) {
      // Register the name as moved
      const name = ctx.expression().name()?.text;
      if (name === undefined) {
        return {
          ok: false,
          error: new TypeError(
            `variable declaration has no name. This is a Parser bug!`,
            ctx.start.line,
          ),
        };
      }

      this.moved_scope[this.moved_scope.length - 1].push(name);
    }

    const name = ctx.var_name().text;
    const is_mutable = ctx.mutable().text !== "";

    const maybe_type = ctx.type();
    const type =
      maybe_type === undefined
        ? new TypeAnnotation(
            to_eager(expression_type.value.type),
            undefined,
            is_mutable,
          )
        : new TypeAnnotation(
            value_to_type_tag(maybe_type.text),
            undefined,
            is_mutable,
          );
    if (type.type === PrimitiveTypeTag.function) {
      type.value = expression_type.value.value;
    } else if (type.type === PrimitiveTypeTag.mutex) {
      type.value =
        maybe_type !== undefined
          ? maybe_type?.text.split("<")[1].split(">")[0] // Either take from the type declaration...
          : // Or deduce from the expression
            type_tag_to_value(
              to_eager(
                value_to_type_tag(
                  expression_type.value.value === undefined
                    ? ""
                    : expression_type.value.value,
                ),
              ),
            );
    }

    if (!is_promotable(expression_type.value.type, type.type)) {
      return {
        ok: false,
        error: new TypeError(
          `variable '${name}' declared with type ${type_tag_to_value(type.type)} but got ${type_tag_to_value(expression_type.value.type)}`,
          ctx.start.line,
        ),
      };
    }

    // TODO: this is for generic types, but for now only Mutex is properly generic
    if (
      type.type === PrimitiveTypeTag.mutex &&
      !is_promotable(
        value_to_type_tag(
          expression_type.value.value === undefined
            ? ""
            : expression_type.value.value,
        ),
        value_to_type_tag(type.value === undefined ? "" : type.value),
      )
    ) {
      return {
        ok: false,
        error: new TypeError(
          `variable '${name}' declared with type ${type.value} but got ${expression_type.value.value}`,
          ctx.start.line,
        ),
      };
    }

    add_to_scope(this.scope, name, type);
    return {
      ok: true,
      value: new TypeAnnotation(PrimitiveTypeTag.empty),
    };
  }

  visitFunction_declaration(
    ctx: Function_declarationContext,
  ): Result<TypeAnnotation> {
    // Reset context
    this.block_results = [];
    this.return_types = [];

    const name = ctx.function_name().text;

    // Extract return type
    const return_type = ctx.type().text;

    // Extract parameter types
    const parameter_types: TypeAnnotation[] = [];
    ctx
      .parameter_list()
      ?.parameters()
      ?.parameter()
      .forEach((param) => {
        const type = new TypeAnnotation(value_to_type_tag(param.type().text));
        parameter_types.push(type);
      });

    for (const param of parameter_types) {
      if (param.type === PrimitiveTypeTag.unknown) {
        this.print_fn("Unknown type in function ", name);
        return {
          ok: false,
          error: new TypeError(
            `unknown type in function '${name}'`,
            ctx.start.line,
          ),
        };
      }
    }

    const parameter_type =
      "<" +
      parameter_types.map((t) => type_tag_to_value(t.type)).join(", ") +
      ">";

    // Register function in current scope
    const type = new TypeAnnotation(
      value_to_type_tag("function"),
      parameter_type + " -> " + return_type,
    );
    this.print_fn("Adding function ", name, " to scope with type ", type.value);
    add_to_scope(this.scope, name, type);
    this.scope.push(new Map());
    this.moved_scope.push([]);

    // Register parameters in current scope
    const parameter_names: string[] = [];
    ctx
      .parameter_list()
      ?.parameters()
      ?.parameter()
      .forEach((param) => {
        const name = param.IDENTIFIER().text;
        parameter_names.push(name);
      });
    for (let i = 0; i < parameter_names.length; i++) {
      add_to_scope(this.scope, parameter_names[i], parameter_types[i]);
    }
    this.scope.push(new Map());
    this.moved_scope.push([]);

    // Check function body
    const body_results = this.visit(ctx.function_body());
    if (!body_results.ok) {
      return body_results;
    }

    this.scope.pop();
    this.moved_scope.pop();

    // Inspect block results
    const final_block = this.block_results[this.block_results.length - 1];
    const intermediate_blocks = this.block_results.slice(0, -1);

    // Check return types of intermediate blocks
    let intermediate_return_type: TypeTag = PrimitiveTypeTag.unknown;
    for (const block of intermediate_blocks) {
      if (
        block.return_type.type !== PrimitiveTypeTag.empty &&
        !is_promotable(block.return_type.type, value_to_type_tag(return_type))
      ) {
        return {
          ok: false,
          error: new TypeError(
            `all return types in block must be the same but got ${block.return_type} and ${return_type}`,
            ctx.start.line,
          ),
        };
      }

      intermediate_return_type =
        intermediate_return_type === PrimitiveTypeTag.unknown
          ? block.return_type.type
          : intermediate_return_type;
    }

    if (
      final_block.block_type.type === PrimitiveTypeTag.empty &&
      final_block.return_type.type === PrimitiveTypeTag.empty
    ) {
      this.print_fn(
        "No final expression and no return statement -> Either function declared to return empty type or all blocks return empty type",
      );
      return return_type === PrimitiveTypeTag.empty
        ? {
            ok: true,
            value: type,
          }
        : is_promotable(
              intermediate_return_type,
              value_to_type_tag(return_type),
            )
          ? {
              ok: true,
              value: type,
            }
          : {
              ok: false,
              error: new TypeError(
                `function '${name}' expects return type ${return_type} but got empty type`,
                ctx.start.line,
              ),
            };
    } else if (
      final_block.block_type.type === PrimitiveTypeTag.empty &&
      final_block.return_type.type !== PrimitiveTypeTag.empty
    ) {
      this.print_fn("No final expression but return statement is present ");
      return is_promotable(
        final_block.return_type.type,
        value_to_type_tag(return_type),
      )
        ? {
            ok: true,
            value: type,
          }
        : {
            ok: false,
            error: new TypeError(
              `function '${name}' expects return type ${return_type} but got ${type_tag_to_value(final_block.return_type.type)}`,
              ctx.start.line,
            ),
          };
    } else if (
      final_block.block_type.type !== PrimitiveTypeTag.empty &&
      final_block.return_type.type === PrimitiveTypeTag.empty
    ) {
      this.print_fn("Final expression but no return statement");
      return is_promotable(
        final_block.block_type.type,
        value_to_type_tag(return_type),
      )
        ? {
            ok: true,
            value: type,
          }
        : {
            ok: false,
            error: new TypeError(
              `function '${name}' expects return type ${return_type} but got the implicit return type ${type_tag_to_value(final_block.block_type.type)}`,
              ctx.start.line,
            ),
          };
    } else {
      // Both final expression and return statement are present
      this.print_fn("Both final expression and return statement are present");
      if (
        !is_promotable(
          final_block.return_type.type,
          value_to_type_tag(return_type),
        )
      ) {
        return {
          ok: false,
          error: new TypeError(
            `function '${name}' expects return type ${return_type} but got ${final_block.return_type.type}`,
            ctx.start.line,
          ),
        };
      }

      if (
        !is_promotable(
          final_block.block_type.type,
          value_to_type_tag(return_type),
        )
      ) {
        return {
          ok: false,
          error: new TypeError(
            `function '${name}' expects return type ${return_type} but got the implicit return type ${final_block.block_type.type}`,
            ctx.start.line,
          ),
        };
      }
    }

    return {
      ok: false,
      error: new TypeError(
        `function '${name}' has an unknown error`,
        ctx.start.line,
      ),
    };
  }

  visitParameter_list(ctx: Parameter_listContext): Result<TypeAnnotation> {
    // Register parameters in current scope
    const maybe_params = ctx.parameters();
    if (maybe_params !== undefined) {
      const params = maybe_params.parameter();
      for (const param of params) {
        const name = param.IDENTIFIER().text;
        const type = new TypeAnnotation(value_to_type_tag(param.type().text));
        add_to_scope(this.scope, name, type);
      }
    }
    const result = this.visitChildren(ctx);
    return result;
  }

  visitName(ctx: NameContext): Result<TypeAnnotation> {
    const line_number = ctx.start.line;
    const name = ctx.text;
    const maybe_type = get_type(this.scope, name);

    if (maybe_type === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `name '${name}' not declared in this scope`,
          line_number,
        ),
      };
    }

    if (is_moved(this.moved_scope, name)) {
      return {
        ok: false,
        error: new TypeError(`use of moved value '${name}'`, line_number),
      };
    }

    return {
      ok: true,
      value: maybe_type,
    };
  }

  visitFunction_application(
    ctx: Function_applicationContext,
  ): Result<TypeAnnotation> {
    const function_name = ctx.function_name().text;
    this.print_fn("Checking function application ", function_name);
    const maybe_type = get_type(this.scope, function_name);
    if (maybe_type === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `function '${function_name}' not declared in this scope. This is a SyntaxError!`,
          ctx.start.line,
        ),
      };
    }

    // Get arguments
    if (maybe_type.type !== PrimitiveTypeTag.function) {
      return {
        ok: false,
        error: new Error(
          `Line ${ctx.start.line}: call expression to '${function_name}' requires function type but got ${maybe_type.type}`,
        ),
      };
    }

    if (maybe_type.value === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `function '${function_name}' has no type. This is a TypeValidator bug!`,
          ctx.start.line,
        ),
      };
    }

    const function_type_string = maybe_type.value;
    const parameter_type_string = function_type_string
      .split("->")[0]
      .trim()
      .slice(1, -1);
    const return_type_string = function_type_string.split("->")[1].trim();

    const parameter_type_string_arr =
      parameter_type_string.length === 0
        ? []
        : parameter_type_string.split(",");

    const parameter_type_tags = parameter_type_string_arr.map((t) =>
      value_to_type_tag(t.trim()),
    );
    const return_type = value_to_type_tag(return_type_string);

    const maybe_args = ctx.args_list().args()?.expression();
    const args = maybe_args === undefined ? [] : maybe_args;
    const annotated_arg_types = args.map((arg) => this.visit(arg));
    const maybe_error = annotated_arg_types.find((arg) => !arg.ok);
    if (maybe_error !== undefined) {
      return maybe_error;
    }
    const arg_types = annotated_arg_types
      .map((arg) => (arg.ok ? arg.value.type : PrimitiveTypeTag.unknown))
      .filter((t) => t !== PrimitiveTypeTag.unknown);

    // Check for use after move
    for (let i = 0; i < parameter_type_tags.length; i++) {
      const arg_name = args[i].name()?.text;
      if (arg_name !== undefined) {
        if (is_moved(this.moved_scope, arg_name)) {
          return {
            ok: false,
            error: new TypeError(
              `use of moved value '${args[i].name()?.text}'`,
              ctx.start.line,
            ),
          };
        }

        if (
          is_borrow(arg_types[i]) ||
          arg_types[i] === PrimitiveTypeTag.function ||
          arg_types[i] === PrimitiveTypeTag.join_handle
        ) {
          // Register the name as moved
          this.moved_scope[this.moved_scope.length - 1].push(arg_name);
        }
      }
    }

    if (is_prebuilt_function(function_name)) {
      // Prevent visitPrebuiltFunction_application from checking moved values again
      const curr_moved = this.moved_scope.pop();
      this.moved_scope.push([]);
      const results = this.visitPrebuiltFunction_application(ctx);
      this.moved_scope.pop();
      this.moved_scope.push(curr_moved === undefined ? [] : curr_moved);
      return results;
    }

    if (parameter_type_tags.length !== arg_types.length) {
      return {
        ok: false,
        error: new TypeError(
          `function '${function_name}' expects ${parameter_type_tags.length} arguments but got ${arg_types.length}`,
          ctx.start.line,
        ),
      };
    }

    for (let i = 0; i < parameter_type_tags.length; i++) {
      if (
        parameter_type_tags[i] !== arg_types[i] &&
        !is_promotable(arg_types[i], parameter_type_tags[i])
      ) {
        return {
          ok: false,
          error: new TypeError(
            `type mismatch: function '${function_name}' expects type ${type_tag_to_value(parameter_type_tags[i])} but got ${type_tag_to_value(arg_types[i])} for argument ${i + 1}`,
            ctx.start.line,
          ),
        };
      }
    }

    return {
      ok: true,
      value: new TypeAnnotation(return_type),
    };
  }

  visitExpression(ctx: ExpressionContext): Result<TypeAnnotation> {
    // Case 1: Literal
    this.print_fn("Checking expression type " + ctx.text);
    const literal_ctx = ctx.literal();
    if (literal_ctx !== undefined) {
      return literal_ctx.boolean_literal()
        ? {
            ok: true,
            value: new TypeAnnotation(PrimitiveTypeTag.bool),
          }
        : literal_ctx.float_literal()
          ? {
              ok: true,
              value: new TypeAnnotation(PrimitiveTypeTag.float_literal),
            }
          : literal_ctx.integer_literal()
            ? {
                ok: true,
                value: new TypeAnnotation(PrimitiveTypeTag.integer_literal),
              }
            : literal_ctx.string_literal()
              ? {
                  ok: true,
                  value: new TypeAnnotation(
                    make_reference(PrimitiveTypeTag.string),
                  ),
                }
              : {
                  ok: false,
                  error: new TypeError(
                    `${literal_ctx.text} is not a valid literal`,
                    ctx.start.line,
                  ),
                };
    }

    // Case 2: Name
    const name_ctx = ctx.name();
    if (name_ctx !== undefined) {
      return this.visitName(name_ctx);
    }

    // Case 3: Block
    const block_ctx = ctx.block();
    if (block_ctx !== undefined) {
      return this.visit(block_ctx);
    }

    // Case 4: Expression BinOp Expression
    const binop_ctx = ctx.binary_operator();
    if (binop_ctx !== undefined) {
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.expression(1));

      if (!left.ok) {
        return left;
      }

      if (!right.ok) {
        return right;
      }

      const left_type = left.value.type;
      const right_type = right.value.type;

      if (is_integer(left_type) && is_integer(right_type)) {
        const has_lazy_type =
          left_type === PrimitiveTypeTag.integer_literal
            ? left
            : right_type === PrimitiveTypeTag.integer_literal
              ? right
              : undefined;

        // No lazily-evaluated type --> both types must be the same
        if (has_lazy_type === undefined) {
          if (left_type !== right_type) {
            return {
              ok: false,
              error: new TypeError(
                `type mismatch: operator ${binop_ctx.text} does not support types ${left_type} and ${right_type}`,
                ctx.start.line,
              ),
            };
          }

          const result_type = is_comparison_operator(binop_ctx.text)
            ? new TypeAnnotation(PrimitiveTypeTag.bool)
            : new TypeAnnotation(left_type);
          return {
            ok: true,
            value: result_type,
          };
        } else {
          // Lazily-evaluated type --> the other type must be the same as the non-lazily-evaluated type

          return left_type === PrimitiveTypeTag.integer_literal
            ? {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(PrimitiveTypeTag.bool)
                  : new TypeAnnotation(right_type),
              }
            : {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(PrimitiveTypeTag.bool)
                  : new TypeAnnotation(left_type),
              };
        }
      } else if (is_float(left_type) && is_float(right_type)) {
        const has_lazy_type =
          left_type === PrimitiveTypeTag.float_literal
            ? left
            : right_type === PrimitiveTypeTag.float_literal
              ? right
              : undefined;

        if (has_lazy_type === undefined) {
          if (left_type !== right_type) {
            return {
              ok: false,
              error: new TypeError(
                `type mismatch: operator ${binop_ctx.text} does not support types ${left_type} and ${right_type}`,
                ctx.start.line,
              ),
            };
          }

          const result_type = is_comparison_operator(binop_ctx.text)
            ? new TypeAnnotation(PrimitiveTypeTag.bool)
            : new TypeAnnotation(left_type);
          return {
            ok: true,
            value: result_type,
          };
        } else {
          return left_type === PrimitiveTypeTag.float_literal
            ? {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(PrimitiveTypeTag.bool)
                  : new TypeAnnotation(right_type),
              }
            : {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(PrimitiveTypeTag.bool)
                  : new TypeAnnotation(left_type),
              };
        }
      }

      return {
        ok: false,
        error: new TypeError(
          `type mismatch: operator ${binop_ctx.text} does not support types ${type_tag_to_value(left_type)} and ${type_tag_to_value(right_type)}`,
          ctx.start.line,
        ),
      };
    }

    // Case 5: expression logic_operator expression
    const logic_ctx = ctx.binary_logical_operator();
    if (logic_ctx !== undefined) {
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.expression(1));
      if (!left.ok) {
        return left;
      }

      if (!right.ok) {
        return right;
      }

      const left_type = left.value.type;
      const right_type = right.value.type;

      if (!is_bool(left_type) || !is_bool(right_type)) {
        return {
          ok: false,
          error: new TypeError(
            `type mismatch: operator ${logic_ctx.text} expects boolean types but got ${left_type} and ${right_type}`,
            ctx.start.line,
          ),
        };
      }

      return {
        ok: true,
        value: new TypeAnnotation(PrimitiveTypeTag.bool),
      };
    }

    // Case 6: Unary operator
    const unary_ctx = ctx.unary_operator();
    if (unary_ctx !== undefined) {
      const type_checker = get_unary_type_checker(unary_ctx.text);
      const expr = this.visit(ctx.expression(0));
      if (!expr.ok) {
        return expr;
      }

      return type_checker(expr.value.type)
        ? {
            ok: true,
            value: expr.value,
          }
        : {
            ok: false,
            error: new TypeError(
              `type mismatch: operator ${unary_ctx.text} expects boolean type but got ${expr.value.type}`,
              ctx.start.line,
            ),
          };
    }

    // Case 7: function application
    const function_ctx = ctx.function_application();
    if (function_ctx !== undefined) {
      return this.visitFunction_application(function_ctx);
    }

    // Case 8: (expression)
    const paren_ctx = ctx.parens_expression();
    if (paren_ctx !== undefined) {
      return this.visit(paren_ctx.expression());
    }

    // Case 9: if expression
    const if_ctx = ctx.if_expression();
    if (if_ctx !== undefined) {
      return this.visit(if_ctx);
    }

    // Case 10: closure expression
    const closure_ctx = ctx.closure();
    if (closure_ctx !== undefined) {
      const current_idx = this.block_results.length;
      const result = this.visitClosure(closure_ctx);
      this.block_results = this.block_results.slice(0, current_idx);
      return result;
    }

    // Case 11: assignment
    const assignment_ctx = ctx.assignment();
    if (assignment_ctx !== undefined) {
      return this.visitAssignment(assignment_ctx);
    }

    // Case 12: refed_name
    const refed_name_ctx = ctx.refed_name();
    if (refed_name_ctx !== undefined) {
      return this.visitRefed_name(refed_name_ctx);
    }

    // Case 13: Derefed name
    const derefed_name_ctx = ctx.derefed_name();
    if (derefed_name_ctx !== undefined) {
      return this.visitDerefed_name(derefed_name_ctx);
    }

    this.print_fn("\tUnknown expression type!");
    return {
      ok: false,
      error: new TypeError(`unknown expression type`, ctx.start.line),
    };
  }

  visitPrebuiltFunction_application(
    ctx: Function_applicationContext,
  ): Result<TypeAnnotation> {
    const function_name = ctx.function_name().text;
    const maybe_args = ctx.args_list().args();

    if (function_name === "thread_spawn") {
      // Argument to thread_spawn must be a closure that takes no arguments and
      // returns nothing
      if (maybe_args === undefined) {
        return {
          ok: false,
          error: new TypeError(
            `thread_spawn expects a closure as an argument`,
            ctx.start.line,
          ),
        };
      }

      const args = maybe_args.expression();
      if (args.length !== 1) {
        return {
          ok: false,
          error: new TypeError(
            `thread_spawn expects a closure as an argument`,
            ctx.start.line,
          ),
        };
      }

      const maybe_closure = this.visit(args[0]);
      if (!maybe_closure.ok) {
        return maybe_closure;
      }
      const argument_type = maybe_closure.value;

      if (argument_type.type !== PrimitiveTypeTag.function) {
        return {
          ok: false,
          error: new TypeError(
            `thread_spawn expects a closure as an argument`,
            ctx.start.line,
          ),
        };
      }

      if (argument_type.value !== "<> -> ()") {
        return {
          ok: false,
          error: new TypeError(
            `thread_spawn expects a closure that takes no arguments and returns nothing`,
            ctx.start.line,
          ),
        };
      }

      return {
        ok: true,
        value: new TypeAnnotation(PrimitiveTypeTag.join_handle),
      };
    }

    if (function_name === "thread_join") {
      // Argument to thread_join must be a JoinHandle
      if (maybe_args === undefined) {
        return {
          ok: false,
          error: new TypeError(
            `thread_join expects a JoinHandle as an argument`,
            ctx.start.line,
          ),
        };
      }

      const args = maybe_args.expression();
      if (args.length !== 1) {
        return {
          ok: false,
          error: new TypeError(
            `thread_join expects a JoinHandle as an argument`,
            ctx.start.line,
          ),
        };
      }

      const maybe_join_handle = this.visit(args[0]);
      if (!maybe_join_handle.ok) {
        return maybe_join_handle;
      }

      const argument_type = maybe_join_handle.value;

      if (argument_type.type !== PrimitiveTypeTag.join_handle) {
        return {
          ok: false,
          error: new TypeError(
            `thread_join expects a JoinHandle as an argument`,
            ctx.start.line,
          ),
        };
      }

      return {
        ok: true,
        value: new TypeAnnotation(PrimitiveTypeTag.empty), // TODO: this should be a Result type
      };
    }

    if (function_name === "println!") {
      return {
        ok: true,
        value: new TypeAnnotation(PrimitiveTypeTag.empty),
      };
    }

    if (function_name === "mutex_new") {
      // Expects 1 argument
      if (maybe_args === undefined || maybe_args.expression().length !== 1) {
        return {
          ok: false,
          error: new TypeError(`mutex_new expects 1 argument`, ctx.start.line),
        };
      }

      const arg_type = this.visit(maybe_args.expression(0));
      if (!arg_type.ok) {
        return arg_type;
      }

      // Mutex is owner -> underlying data is mutable from pov of mutex
      arg_type.value.is_mutable = true;

      // Application of mutex_new yields a Mutex<T>
      return {
        ok: true,
        value: new TypeAnnotation(
          PrimitiveTypeTag.mutex,
          type_tag_to_value(arg_type.value.type),
          false,
        ),
      };
    }

    if (function_name === "lock") {
      // Expects 1 argument
      if (maybe_args === undefined || maybe_args.expression().length !== 1) {
        return {
          ok: false,
          error: new TypeError(`mutex_new expects 1 argument`, ctx.start.line),
        };
      }

      const arg_type = this.visit(maybe_args.expression(0));
      if (!arg_type.ok) {
        return arg_type;
      }

      console.log("lock arg type: ", arg_type);
      if (arg_type.value.type !== PrimitiveTypeTag.mutex) {
        return {
          ok: false,
          error: new TypeError(
            `lock expects a Mutex as an argument`,
            ctx.start.line,
          ),
        };
      }

      // Application of lock yields a mutable reference to the underlying data
      const underlying_data_type_tag = value_to_type_tag(
        arg_type.value.value !== undefined ? arg_type.value.value : "",
      );
      return {
        ok: true,
        value: new TypeAnnotation(
          make_mutable_reference(underlying_data_type_tag),
        ),
      };
    }

    return {
      ok: false,
      error: new TypeError(
        `Application of prebuilt function '${function_name}' is not allowed`,
        ctx.start.line,
      ),
    };
  }

  visitImmutable_refed_name(
    ctx: Immutable_refed_nameContext,
  ): Result<TypeAnnotation> {
    const maybe_name = ctx.name();
    const maybe_refed_name = ctx.refed_name();

    if (maybe_name === undefined && maybe_refed_name === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `refed_name has no name or refed_name. This is a Parser bug!`,
          ctx.start.line,
        ),
      };
    }

    let type =
      maybe_name !== undefined
        ? this.visitName(maybe_name)
        : maybe_refed_name !== undefined
          ? this.visitRefed_name(maybe_refed_name)
          : undefined;

    if (type === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `refed_name has no name or refed_name. This is a Parser bug! [Impossible code path]`,
          ctx.start.line,
        ),
      };
    }
    if (!type.ok) {
      return type;
    }

    return {
      ok: true,
      value: new TypeAnnotation(make_reference(type.value.type)),
    };
  }

  visitMutable_refed_name(
    ctx: Mutable_refed_nameContext,
  ): Result<TypeAnnotation> {
    const maybe_name = ctx.name();
    const maybe_refed_name = ctx.refed_name();

    if (maybe_name === undefined && maybe_refed_name === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `refed_name has no name or refed_name. This is a Parser bug!`,
          ctx.start.line,
        ),
      };
    }

    let type =
      maybe_name !== undefined
        ? this.visitName(maybe_name)
        : maybe_refed_name !== undefined
          ? this.visitRefed_name(maybe_refed_name)
          : undefined;
    let name =
      maybe_name !== undefined ? maybe_name.text : maybe_refed_name?.text;

    if (type === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `refed_name has no name or refed_name. This is a Parser bug! [Impossible code path]`,
          ctx.start.line,
        ),
      };
    }
    if (!type.ok) {
      return type;
    }

    if (!type.value.is_mutable) {
      return {
        ok: false,
        error: new TypeError(
          `cannot borrow ${name} as mutable, as it is not declared as mutable`,
          ctx.start.line,
        ),
      };
    }

    return {
      ok: true,
      value: new TypeAnnotation(
        make_mutable_reference(type.value.type),
        undefined,
        true,
      ),
    };
  }

  visitRefed_name(ctx: Refed_nameContext): Result<TypeAnnotation> {
    const maybe_immutable_refed_name = ctx.immutable_refed_name();
    if (maybe_immutable_refed_name !== undefined) {
      return this.visitImmutable_refed_name(maybe_immutable_refed_name);
    }

    const maybe_mutable_refed_name = ctx.mutable_refed_name();
    if (maybe_mutable_refed_name !== undefined) {
      return this.visitMutable_refed_name(maybe_mutable_refed_name);
    }

    return {
      ok: false,
      error: new TypeError(
        `refed_name has no immutable_refed_name or mutable_refed_name. This is a Parser bug!`,
        ctx.start.line,
      ),
    };
  }

  visitDerefed_name(ctx: Derefed_nameContext): Result<TypeAnnotation> {
    const maybe_name = ctx.name();
    const maybe_derefed_name = ctx.derefed_name();

    if (maybe_name === undefined && maybe_derefed_name === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `derefed_name has no name or derefed_name. This is a Parser bug!`,
          ctx.start.line,
        ),
      };
    }

    let maybe_underlying_name = get_underlying_name_deref(
      maybe_name,
      maybe_derefed_name,
    );
    if (maybe_underlying_name === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `derefed_name has no name or derefed_name. This is a Parser bug! [Impossible code path]`,
          ctx.start.line,
        ),
      };
    }
    const underlying_name = maybe_underlying_name.name;
    const num_deref = maybe_underlying_name.num_deref;

    const name_type = this.visitName(underlying_name);
    if (!name_type.ok) {
      return name_type;
    }

    // Number of dereferences must be less than or equal to the number of references
    let curr_type_tag = name_type.value.type;
    for (let i = num_deref; i > 0; i--) {
      if (!is_borrow(curr_type_tag)) {
        return {
          ok: false,
          error: new TypeError(
            `type ${type_tag_to_value(curr_type_tag)} cannot be dereferenced`,
            ctx.start.line,
          ),
        };
      }

      curr_type_tag = unwrap_reference(curr_type_tag);
    }

    return {
      ok: true,
      value: new TypeAnnotation(curr_type_tag),
    };
  }

  visitClosure(ctx: ClosureContext): Result<TypeAnnotation> {
    this.print_fn("Visiting closure");

    // Extract return type
    const return_type = value_to_type_tag(ctx.type().text);

    // Extract parameter types
    const parameter_types: TypeAnnotation[] = [];
    ctx
      .closure_parameter_list()
      ?.parameters()
      ?.parameter()
      .forEach((param) => {
        const type = new TypeAnnotation(value_to_type_tag(param.type().text));
        parameter_types.push(type);
      });
    const parameter_type =
      "<" + parameter_types.map((t) => type_tag_to_value(t)).join(", ") + ">";

    this.print_fn(
      "Adding closure to scope with type ",
      parameter_type + " -> " + return_type,
    );

    // Build function type
    const type = new TypeAnnotation(
      value_to_type_tag("function"),
      parameter_type + " -> " + return_type,
    );
    this.scope.push(new Map());
    this.moved_scope.push([]);

    // Register parameters in current scope
    const parameter_names: string[] = [];
    ctx
      .closure_parameter_list()
      ?.parameters()
      ?.parameter()
      .forEach((param) => {
        const name = param.IDENTIFIER().text;
        parameter_names.push(name);
      });
    for (let i = 0; i < parameter_names.length; i++) {
      add_to_scope(this.scope, parameter_names[i], parameter_types[i]);
    }
    this.scope.push(new Map());
    this.moved_scope.push([]);

    // Check function body
    const body_results = this.visit(ctx.function_body());
    if (!body_results.ok) {
      return body_results;
    }
    this.scope.pop();
    this.moved_scope.pop();

    // Inspect block results
    const final_block = this.block_results[this.block_results.length - 1];
    const intermediate_blocks = this.block_results.slice(0, -1);

    // Check return types of intermediate blocks
    let intermediate_return_type: TypeTag = PrimitiveTypeTag.unknown;
    for (const block of intermediate_blocks) {
      if (
        block.return_type.type !== PrimitiveTypeTag.empty &&
        !is_promotable(block.return_type.type, return_type)
      ) {
        return {
          ok: false,
          error: new TypeError(
            `all return types in block must be the same but got ${block.return_type} and ${return_type}`,
            ctx.start.line,
          ),
        };
      }

      intermediate_return_type =
        intermediate_return_type === PrimitiveTypeTag.unknown
          ? block.return_type.type
          : intermediate_return_type;
    }

    if (
      final_block.block_type.type === PrimitiveTypeTag.empty &&
      final_block.return_type.type === PrimitiveTypeTag.empty
    ) {
      this.print_fn(
        "No final expression and no return statement -> Either closure declared to return empty type or all blocks return empty type",
      );
      return return_type === PrimitiveTypeTag.empty
        ? {
            ok: true,
            value: type,
          }
        : is_promotable(intermediate_return_type, return_type)
          ? {
              ok: true,
              value: type,
            }
          : {
              ok: false,
              error: new TypeError(
                `closure expects return type ${return_type} but got empty type`,
                ctx.start.line,
              ),
            };
    } else if (
      final_block.block_type.type === PrimitiveTypeTag.empty &&
      final_block.return_type.type !== PrimitiveTypeTag.empty
    ) {
      this.print_fn("No final expression but return statement is present ");
      return is_promotable(final_block.return_type.type, return_type)
        ? {
            ok: true,
            value: type,
          }
        : {
            ok: false,
            error: new TypeError(
              `closure expects return type ${return_type} but got ${final_block.return_type.type}`,
              ctx.start.line,
            ),
          };
    } else if (
      final_block.block_type.type !== PrimitiveTypeTag.empty &&
      final_block.return_type.type === PrimitiveTypeTag.empty
    ) {
      this.print_fn("Final expression but no return statement");
      return return_type === final_block.block_type.type
        ? {
            ok: true,
            value: type,
          }
        : {
            ok: false,
            error: new TypeError(
              `closure expects return type ${return_type} but got the implicit return type ${final_block.block_type.type}`,
              ctx.start.line,
            ),
          };
    } else {
      // Both final expression and return statement are present
      this.print_fn("Both final expression and return statement are present");
      if (!is_promotable(final_block.return_type.type, return_type)) {
        return {
          ok: false,
          error: new TypeError(
            `closure expects return type ${return_type} but got ${final_block.return_type.type}`,
            ctx.start.line,
          ),
        };
      }

      if (!is_promotable(final_block.block_type.type, return_type)) {
        return {
          ok: false,
          error: new TypeError(
            `closure expects return type ${return_type} but got the implicit return type ${final_block.block_type.type}`,
            ctx.start.line,
          ),
        };
      }
    }

    return {
      ok: false,
      error: new TypeError(`closure has an unknown error`, ctx.start.line),
    };
  }

  visitAssignment(ctx: AssignmentContext): Result<TypeAnnotation> {
    const maybe_name = ctx.name();
    const maybe_derefed_name = ctx.derefed_name();

    if (maybe_name === undefined && maybe_derefed_name === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `assignment has no name or derefed_name. This is a Parser bug!`,
          ctx.start.line,
        ),
      };
    } else if (maybe_name !== undefined) {
      const type_annotation = this.visitName(maybe_name);
      if (!type_annotation.ok) {
        return type_annotation;
      }

      const name = maybe_name.text;
      const type = type_annotation.value;
      if (type === undefined) {
        return {
          ok: false,
          error: new TypeError(
            `variable '${name}' not declared in this scope`,
            ctx.start.line,
          ),
        };
      }

      if (!type.is_mutable) {
        return {
          ok: false,
          error: new TypeError(
            `cannot assign to immutable variable ${name} with type ${type_tag_to_value(type.type)}`,
            ctx.start.line,
          ),
        };
      }

      const expr = this.visit(ctx.expression());
      if (!expr.ok) {
        return expr;
      }

      if (!is_promotable(expr.value.type, type.type)) {
        return {
          ok: false,
          error: new TypeError(
            `variable '${name}' declared with type ${type_tag_to_value(type.type)} but got ${type_tag_to_value(expr.value.type)}`,
            ctx.start.line,
          ),
        };
      }

      return {
        ok: true,
        value: new TypeAnnotation(PrimitiveTypeTag.empty),
      };
    } else {
      let derefed_name = maybe_derefed_name; // Will not be undefined
      const maybe_underlying_name = get_underlying_name_deref(
        derefed_name?.name(),
        derefed_name?.derefed_name(),
      );

      if (maybe_underlying_name === undefined) {
        return {
          ok: false,
          error: new TypeError(
            `assignment has no name or derefed_name. This is a Parser bug!`,
            ctx.start.line,
          ),
        };
      }

      const { name, num_deref } = maybe_underlying_name;
      const name_type = this.visitName(name);
      if (!name_type.ok) {
        return name_type;
      }

      // Number of dereferences must be less than or equal to the number of references
      let curr_type_tag = name_type.value.type;
      for (let i = num_deref; i > 0; i--) {
        if (!is_borrow(curr_type_tag)) {
          return {
            ok: false,
            error: new TypeError(
              `type ${type_tag_to_value(curr_type_tag)} cannot be dereferenced`,
              ctx.start.line,
            ),
          };
        } else if (!is_mutable_borrow(curr_type_tag)) {
          return {
            ok: false,
            error: new TypeError(
              `cannot assign to ${maybe_derefed_name?.text}, which is behind an immutable reference`,
              ctx.start.line,
            ),
          };
        }

        curr_type_tag = unwrap_reference(curr_type_tag);
      }
      const expr = this.visit(ctx.expression());
      if (!expr.ok) {
        return expr;
      }

      if (!is_promotable(expr.value.type, curr_type_tag)) {
        return {
          ok: false,
          error: new TypeError(
            `variable '${name}' declared with type ${type_tag_to_value(name_type.value.type)} but got ${type_tag_to_value(expr.value.type)}`,
            ctx.start.line,
          ),
        };
      }

      return {
        ok: true,
        value: new TypeAnnotation(PrimitiveTypeTag.empty),
      };
    }
  }

  visitCond_expr(ctx: Cond_exprContext): Result<TypeAnnotation> {
    const result = this.visitChildren(ctx);
    if (!result.ok) {
      return result;
    }

    if (!is_bool(result.value.type)) {
      return {
        ok: false,
        error: new TypeError(
          `condition expression must be of type bool but got ${type_tag_to_value(result.value.type)}`,
          ctx.start.line,
        ),
      };
    }

    return result;
  }

  visitIf_expression(ctx: If_expressionContext): Result<TypeAnnotation> {
    // Check condition
    const condition_type = this.visit(ctx.cond_expr());
    if (!condition_type.ok) {
      return condition_type;
    }

    if (!is_bool(condition_type.value.type)) {
      return {
        ok: false,
        error: new TypeError(
          `condition expression must be of type bool but got ${type_tag_to_value(condition_type.value.type)}`,
          ctx.start.line,
        ),
      };
    }

    // Check then block
    const then_block_type = this.visit(ctx.block(0));
    if (!then_block_type.ok) {
      return then_block_type;
    }

    // Check else block if it exists
    const maybe_else_block =
      ctx.block(1) === undefined ? ctx.if_expression() : ctx.block(1);
    if (maybe_else_block === undefined) {
      return then_block_type;
    }

    const else_block_type = this.visit(maybe_else_block);
    if (!else_block_type.ok) {
      return else_block_type;
    }

    if (
      !is_promotable(then_block_type.value.type, else_block_type.value.type) &&
      !is_promotable(else_block_type.value.type, then_block_type.value.type)
    ) {
      return {
        ok: false,
        error: new TypeError(
          `if/else blocks must have the same type but got ${then_block_type.value} and ${else_block_type.value}`,
          ctx.start.line,
        ),
      };
    }

    return then_block_type;
  }
}

export class TypeSystemValidator
  extends AbstractParseTreeVisitor<boolean>
  implements Validator
{
  rule_name: string = "Types";
  private print_fn: (message?: any, ...optionalParams: any[]) => void;
  private type_producer: TypeProducer;

  constructor(private debug_mode: boolean) {
    super();
    this.print_fn = print(debug_mode);
    this.type_producer = new TypeProducer(debug_mode);
  }

  defaultResult() {
    return true;
  }

  aggregateResult(aggregate: boolean, nextResult: boolean) {
    return aggregate && nextResult;
  }

  visitProgram(ctx: ProgramContext): boolean {
    this.print_fn("Calling type producer");
    const program_type = this.type_producer.visit(ctx);

    if (!program_type.ok) {
      console.error(program_type.error);
      return false;
    }

    return true;
  }
}
