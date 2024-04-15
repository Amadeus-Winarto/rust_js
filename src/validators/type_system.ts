import {
  AssignmentContext,
  BlockContext,
  ClosureContext,
  Cond_exprContext,
  Constant_declarationContext,
  ExpressionContext,
  Function_declarationContext,
  If_expressionContext,
  Parameter_listContext,
  ProgramContext,
  Return_expressionContext,
  StatementContext,
  Variable_declarationContext,
} from "../grammars/Rust2Parser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  Validator,
  Scope,
  TypeAnnotation,
  TypeTag,
  value_to_type,
  is_integer,
  is_float,
  is_bool,
  is_promotable,
  is_comparison_operator,
} from "./types";
import { print, add_to_scope, get_type, Result } from "../utils";
import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";

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

type BlockResults = {
  block_type: TypeAnnotation;
  return_type: TypeAnnotation;
};

class TypeProducer
  extends AbstractParseTreeVisitor<Result<TypeAnnotation>>
  implements RustVisitor<Result<TypeAnnotation>>
{
  private scope: Scope[] = [];
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
      value: new TypeAnnotation(TypeTag.unknown),
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

    // Initialise with common types and functions
    add_to_scope(
      this.scope,
      "println!",
      new TypeAnnotation(TypeTag.function, "<...> -> ()"),
    );
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
      value: new TypeAnnotation(TypeTag.empty, ""),
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
      value: new TypeAnnotation(TypeTag.empty),
    };
    const curr_block_type: Result<TypeAnnotation> =
      maybe_expr === undefined ? empty_type : this.visit(maybe_expr);
    this.scope.pop();

    if (!curr_block_type.ok) {
      return curr_block_type;
    }

    // Save the block type for the function
    this.block_results.push({
      block_type: curr_block_type.value,
      return_type:
        return_types.length > 0
          ? return_types[0]
          : new TypeAnnotation(TypeTag.empty, ""),
    });
    return curr_block_type;
  }

  visitConstant_declaration(
    ctx: Constant_declarationContext,
  ): Result<TypeAnnotation> {
    const name = ctx.const_name().text;
    const type = new TypeAnnotation(value_to_type(ctx.type().text));
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
    return this.visitChildren(ctx);
  }

  visitVariable_declaration(
    ctx: Variable_declarationContext,
  ): Result<TypeAnnotation> {
    const name = ctx.var_name().text;
    const type = new TypeAnnotation(value_to_type(ctx.type().text));
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
    return this.visitChildren(ctx);
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
        const type = new TypeAnnotation(value_to_type(param.type().text));
        parameter_types.push(type);
      });

    for (const param of parameter_types) {
      if (param.type === TypeTag.unknown) {
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
      "<" + parameter_types.map((t) => t.type.toString()).join(", ") + ">";

    // Register function in current scope
    const type = new TypeAnnotation(
      value_to_type("function"),
      parameter_type + " -> " + return_type,
    );
    this.print_fn("Adding function ", name, " to scope with type ", type.value);
    add_to_scope(this.scope, name, type);
    this.scope.push(new Map());

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

    // Check function body
    const body_results = this.visit(ctx.function_body());
    if (!body_results.ok) {
      return body_results;
    }

    this.scope.pop();

    // Inspect block results
    const final_block = this.block_results[this.block_results.length - 1];
    const intermediate_blocks = this.block_results.slice(0, -1);

    // Check return types of intermediate blocks
    let intermediate_return_type = TypeTag.unknown;
    for (const block of intermediate_blocks) {
      if (
        block.return_type.type !== TypeTag.empty &&
        !is_promotable(block.return_type.type, value_to_type(return_type))
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
        intermediate_return_type === TypeTag.unknown
          ? block.return_type.type
          : intermediate_return_type;
    }

    if (
      final_block.block_type.type === TypeTag.empty &&
      final_block.return_type.type === TypeTag.empty
    ) {
      this.print_fn(
        "No final expression and no return statement -> Either function declared to return empty type or all blocks return empty type",
      );
      return return_type === TypeTag.empty
        ? {
            ok: true,
            value: type,
          }
        : is_promotable(intermediate_return_type, value_to_type(return_type))
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
      final_block.block_type.type === TypeTag.empty &&
      final_block.return_type.type !== TypeTag.empty
    ) {
      this.print_fn("No final expression but return statement is present ");
      return is_promotable(
        final_block.return_type.type,
        value_to_type(return_type),
      )
        ? {
            ok: true,
            value: type,
          }
        : {
            ok: false,
            error: new TypeError(
              `function '${name}' expects return type ${return_type} but got ${final_block.return_type.type}`,
              ctx.start.line,
            ),
          };
    } else if (
      final_block.block_type.type !== TypeTag.empty &&
      final_block.return_type.type === TypeTag.empty
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
              `function '${name}' expects return type ${return_type} but got the implicit return type ${final_block.block_type.type}`,
              ctx.start.line,
            ),
          };
    } else {
      // Both final expression and return statement are present
      this.print_fn("Both final expression and return statement are present");
      if (
        !is_promotable(final_block.return_type.type, value_to_type(return_type))
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
        !is_promotable(final_block.block_type.type, value_to_type(return_type))
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
        const type = new TypeAnnotation(value_to_type(param.type().text));
        add_to_scope(this.scope, name, type);
      }
    }
    const result = this.visitChildren(ctx);
    return result;
  }

  visitExpression(ctx: ExpressionContext): Result<TypeAnnotation> {
    // Case 1: Literal
    this.print_fn("Checking expression type " + ctx.text);
    const literal_ctx = ctx.literal();
    if (literal_ctx !== undefined) {
      return literal_ctx.boolean_literal()
        ? {
            ok: true,
            value: new TypeAnnotation(TypeTag.bool),
          }
        : literal_ctx.float_literal()
          ? {
              ok: true,
              value: new TypeAnnotation(TypeTag.float_literal),
            }
          : literal_ctx.integer_literal()
            ? {
                ok: true,
                value: new TypeAnnotation(TypeTag.integer_literal),
              }
            : literal_ctx.string_literal()
              ? {
                  ok: true,
                  value: new TypeAnnotation(TypeTag.string),
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
      const line_number = name_ctx.start.line;
      const name = name_ctx.text;
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

      return {
        ok: true,
        value: maybe_type,
      };
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
          left_type === TypeTag.integer_literal
            ? left
            : right_type === TypeTag.integer_literal
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
            ? new TypeAnnotation(TypeTag.bool)
            : new TypeAnnotation(left_type);
          return {
            ok: true,
            value: result_type,
          };
        } else {
          // Lazily-evaluated type --> the other type must be the same as the non-lazily-evaluated type

          return left_type === TypeTag.integer_literal
            ? {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(TypeTag.bool)
                  : new TypeAnnotation(right_type),
              }
            : {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(TypeTag.bool)
                  : new TypeAnnotation(left_type),
              };
        }
      } else if (is_float(left_type) && is_float(right_type)) {
        const has_lazy_type =
          left_type === TypeTag.float_literal
            ? left
            : right_type === TypeTag.float_literal
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
            ? new TypeAnnotation(TypeTag.bool)
            : new TypeAnnotation(left_type);
          return {
            ok: true,
            value: result_type,
          };
        } else {
          return left_type === TypeTag.float_literal
            ? {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(TypeTag.bool)
                  : new TypeAnnotation(right_type),
              }
            : {
                ok: true,
                value: is_comparison_operator(binop_ctx.text)
                  ? new TypeAnnotation(TypeTag.bool)
                  : new TypeAnnotation(left_type),
              };
        }
      }

      return {
        ok: false,
        error: new TypeError(
          `type mismatch: operator ${binop_ctx.text} does not support types ${left_type} and ${right_type}`,
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
        value: new TypeAnnotation(TypeTag.bool),
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
      const function_name = function_ctx.function_name().text;
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
      if (maybe_type.type !== TypeTag.function) {
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

      const parameter_types = parameter_type_string
        .split(",")
        .map((t) => value_to_type(t.trim()));
      const return_type = value_to_type(return_type_string);

      const maybe_args = function_ctx.args_list().args()?.expression();
      const args = maybe_args === undefined ? [] : maybe_args;
      const annotated_arg_types = args.map((arg) => this.visit(arg));
      const maybe_error = annotated_arg_types.find((arg) => !arg.ok);
      if (maybe_error !== undefined) {
        return maybe_error;
      }
      const arg_types = annotated_arg_types
        .map((arg) => (arg.ok ? arg.value.type : TypeTag.unknown))
        .filter((t) => t !== TypeTag.unknown);

      const parameter_has_unit_type =
        parameter_types.length === 1 && parameter_types[0] === TypeTag.unit;
      if (parameter_has_unit_type) {
        // Function takes in variable number of arguments of any type --> only println! macro should
        // exhibit this behaviour
        return {
          ok: true,
          value: new TypeAnnotation(return_type),
        };
      }

      if (parameter_types.length !== arg_types.length) {
        return {
          ok: false,
          error: new TypeError(
            `function '${function_name}' expects ${parameter_types.length} arguments but got ${arg_types.length}`,
            ctx.start.line,
          ),
        };
      }

      for (let i = 0; i < parameter_types.length; i++) {
        if (
          parameter_types[i] !== arg_types[i] &&
          !is_promotable(arg_types[i], parameter_types[i])
        ) {
          return {
            ok: false,
            error: new TypeError(
              `type mismatch: function '${function_name}' expects type ${parameter_types[i]} but got ${arg_types[i]}`,
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

    this.print_fn("\tUnknown expression type!");
    return {
      ok: false,
      error: new TypeError(`unknown expression type`, ctx.start.line),
    };
  }

  visitClosure(ctx: ClosureContext): Result<TypeAnnotation> {
    this.print_fn("Visiting closure");

    // Extract return type
    const return_type = value_to_type(ctx.type().text);

    // Extract parameter types
    const parameter_types: TypeAnnotation[] = [];
    ctx
      .closure_parameter_list()
      ?.parameters()
      ?.parameter()
      .forEach((param) => {
        const type = new TypeAnnotation(value_to_type(param.type().text));
        parameter_types.push(type);
      });
    const parameter_type =
      "<" + parameter_types.map((t) => t.type.toString()).join(", ") + ">";

    this.print_fn(
      "Adding closure to scope with type ",
      parameter_type + " -> " + return_type,
    );

    // Build function type
    const type = new TypeAnnotation(
      value_to_type("function"),
      parameter_type + " -> " + return_type,
    );
    this.scope.push(new Map());

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

    // Check function body
    const curr_block_results = this.block_results.length;
    const body_results = this.visit(ctx.function_body());
    if (!body_results.ok) {
      return body_results;
    }
    this.scope.pop();

    // Inspect block results
    const final_block = this.block_results[this.block_results.length - 1];
    const intermediate_blocks = this.block_results.slice(0, -1);

    // Check return types of intermediate blocks
    let intermediate_return_type = TypeTag.unknown;
    for (const block of intermediate_blocks) {
      if (
        block.return_type.type !== TypeTag.empty &&
        !is_promotable(block.return_type.type, value_to_type(return_type))
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
        intermediate_return_type === TypeTag.unknown
          ? block.return_type.type
          : intermediate_return_type;
    }

    if (
      final_block.block_type.type === TypeTag.empty &&
      final_block.return_type.type === TypeTag.empty
    ) {
      this.print_fn(
        "No final expression and no return statement -> Either closure declared to return empty type or all blocks return empty type",
      );
      return return_type === TypeTag.empty
        ? {
            ok: true,
            value: type,
          }
        : is_promotable(intermediate_return_type, value_to_type(return_type))
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
      final_block.block_type.type === TypeTag.empty &&
      final_block.return_type.type !== TypeTag.empty
    ) {
      this.print_fn("No final expression but return statement is present ");
      return is_promotable(
        final_block.return_type.type,
        value_to_type(return_type),
      )
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
      final_block.block_type.type !== TypeTag.empty &&
      final_block.return_type.type === TypeTag.empty
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
      if (
        !is_promotable(final_block.return_type.type, value_to_type(return_type))
      ) {
        return {
          ok: false,
          error: new TypeError(
            `closure expects return type ${return_type} but got ${final_block.return_type.type}`,
            ctx.start.line,
          ),
        };
      }

      if (
        !is_promotable(final_block.block_type.type, value_to_type(return_type))
      ) {
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
    const name = ctx.name().text;
    const type = get_type(this.scope, name);
    if (type === undefined) {
      return {
        ok: false,
        error: new TypeError(
          `variable '${name}' not declared in this scope`,
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
          `variable '${name}' declared with type ${type.type} but got ${expr.value.type}`,
          ctx.start.line,
        ),
      };
    }

    return {
      ok: true,
      value: type,
    };
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
          `condition expression must be of type bool but got ${result.value.type}`,
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
          `condition expression must be of type bool but got ${condition_type.value.type}`,
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

    if (!then_block_type.value.equals(else_block_type.value)) {
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
