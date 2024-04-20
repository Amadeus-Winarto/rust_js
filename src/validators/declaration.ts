import {
  BlockContext,
  Constant_declarationContext,
  ExpressionContext,
  Function_applicationContext,
  Function_declarationContext,
  Parameter_listContext,
  ProgramContext,
  Variable_declarationContext,
} from "../grammars/Rust2Parser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  Validator,
  Scope,
  printScopes,
  TypeAnnotation,
  value_to_type_tag,
  PrimitiveTypeTag,
} from "./types";
import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";
import {
  print,
  add_to_scope,
  in_scope_untyped,
  Result,
  in_scope_untyped_recursive,
} from "../utils";
import { SemanticError } from "./utils/errors";
import {
  Closure_parameter_listContext,
  ClosureContext,
} from "../grammars/Rust2Parser";
import { PreBuiltFunctions } from "../preamble/preamble";

const null_type = new TypeAnnotation(PrimitiveTypeTag.empty);

class DeclarationRuleValidator
  extends AbstractParseTreeVisitor<Result<Boolean>>
  implements RustVisitor<Result<Boolean>>
{
  private scope: Scope[] = [];
  private print_fn: (message?: any, ...optionalParams: any[]) => void;

  constructor(private debug_mode: boolean) {
    super();
    this.print_fn = print(debug_mode);
  }

  defaultResult(): Result<Boolean> {
    return {
      ok: true,
      value: true,
    };
  }

  aggregateResult(aggregate: Result<Boolean>, nextResult: Result<Boolean>) {
    if (!aggregate.ok) {
      return aggregate;
    }

    if (!nextResult.ok) {
      return nextResult;
    }

    return aggregate && nextResult;
  }

  visitProgram(ctx: ProgramContext): Result<Boolean> {
    this.print_fn("Visiting program -> Initialising scope");
    this.scope = [new Map()];

    for (const [function_name, function_data] of PreBuiltFunctions.entries()) {
      add_to_scope(this.scope, function_name, function_data.type);
    }

    return this.visitChildren(ctx);
  }

  visitBlock(ctx: BlockContext): Result<Boolean> {
    this.print_fn("Visiting block -> Creating new scope");
    this.scope.push(new Map());
    const result = this.visitChildren(ctx);
    this.scope.pop();
    return result;
  }

  visitConstant_declaration(ctx: Constant_declarationContext): Result<Boolean> {
    this.print_fn("Visiting constant_declaration");
    const name = ctx.const_name().text;
    const type = null_type;

    // if (in_scope_untyped(this.scope, name)) {
    //   this.print_fn(
    //     "Error: constant name '",
    //     name,
    //     "' already declared in this scope",
    //   );
    //   return {
    //     ok: false,
    //     error: new SemanticError(
    //       ctx.start.line,
    //       "Constant name '" + name + "' already declared in this scope",
    //     ),
    //   };
    // }

    add_to_scope(this.scope, name, type);
    printScopes(this.debug_mode, "Current scope", this.scope);
    return this.visitChildren(ctx);
  }

  visitVariable_declaration(ctx: Variable_declarationContext): Result<Boolean> {
    this.print_fn("Visiting variable_declaration");
    const name = ctx.var_name().text;
    const type = null_type;

    // if (in_scope_untyped(this.scope, name)) {
    //   this.print_fn(
    //     "Error: variable name '",
    //     name,
    //     "' already declared in this scope",
    //   );
    //   return {
    //     ok: false,
    //     error: new SemanticError(
    //       ctx.start.line,
    //       "Variable name '" + name + "' already declared in this scope",
    //     ),
    //   };
    // }
    add_to_scope(this.scope, name, type);
    printScopes(this.debug_mode, "Current scope", this.scope);

    return this.visitChildren(ctx);
  }

  visitFunction_declaration(ctx: Function_declarationContext): Result<Boolean> {
    this.print_fn("Visiting function_declaration");
    const name = ctx.function_name().text;
    const type = null_type;

    // Register function name in current scope
    if (in_scope_untyped(this.scope, name)) {
      this.print_fn(
        "Error: function name '",
        name,
        "' already declared in this scope",
      );
      return {
        ok: false,
        error: new SemanticError(
          ctx.start.line,
          "Function name '" + name + "' already declared in this scope",
        ),
      };
    }
    add_to_scope(this.scope, name, type);
    printScopes(this.debug_mode, "Current scope", this.scope);

    this.print_fn("Creating new scope for function parameters");
    this.scope.push(new Map());
    const result = this.visitChildren(ctx);
    this.scope.pop();
    return result;
  }

  visitClosure(ctx: ClosureContext): Result<Boolean> {
    this.print_fn("Visiting closure");
    this.print_fn("Creating new scope for closure parameters");
    this.scope.push(new Map());
    const result = this.visitChildren(ctx);
    this.scope.pop();
    return result;
  }

  visitClosure_parameter_list(
    ctx: Closure_parameter_listContext,
  ): Result<Boolean> {
    this.print_fn("Visiting closure's parameter_list");
    return this.visitParameter_list(ctx as Parameter_listContext);
  }

  visitParameter_list(ctx: Parameter_listContext): Result<Boolean> {
    this.print_fn("Visiting parameter_list");

    // Register parameters in current scope
    const maybe_params = ctx.parameters();
    if (maybe_params !== undefined) {
      const params = maybe_params.parameter();
      for (const param of params) {
        const name = param.IDENTIFIER().text;
        const type = null_type;

        if (in_scope_untyped(this.scope, name)) {
          this.print_fn(
            "Error: parameter name '",
            name,
            "' already declared in this scope",
          );
          return {
            ok: false,
            error: new SemanticError(
              ctx.start.line,
              "Parameter name '" + name + "' already declared in this scope",
            ),
          };
        }
        add_to_scope(this.scope, name, type);
      }
    }

    printScopes(this.debug_mode, "Current scope", this.scope);
    const result = this.visitChildren(ctx);
    return result;
  }

  visitExpression(ctx: ExpressionContext): Result<Boolean> {
    this.print_fn("Visiting expression");

    // Case 1: Literal
    const literal_ctx = ctx.literal();
    if (literal_ctx !== undefined) {
      return {
        ok: true,
        value: true,
      };
    }

    // Case 2: Name
    const name_ctx = ctx.name();
    if (name_ctx !== undefined) {
      const name = name_ctx.text;
      if (!in_scope_untyped_recursive(this.scope, name)) {
        this.print_fn("Error: name '", name, "' not declared in this scope");
        return {
          ok: false,
          error: new SemanticError(
            ctx.start.line,
            "Name '" + name + "' not declared in this scope",
          ),
        };
      }

      return {
        ok: true,
        value: true,
      };
    }

    // Case 3: All other cases
    return this.visitChildren(ctx);
  }

  visitFunction_application(ctx: Function_applicationContext): Result<Boolean> {
    this.print_fn("Visiting function_application");
    const name = ctx.function_name().text;

    if (!in_scope_untyped_recursive(this.scope, name)) {
      this.print_fn("Error: function '", name, "' not declared in this scope");
      return {
        ok: false,
        error: new SemanticError(
          ctx.start.line,
          "Function '" + name + "' not declared in this scope",
        ),
      };
    }

    return this.visitChildren(ctx);
  }
}

export class DeclarationValidator
  extends AbstractParseTreeVisitor<boolean>
  implements Validator
{
  rule_name: string = "NoDoubleDeclare + DeclareBeforeUse";
  private print_fn: (message?: any, ...optionalParams: any[]) => void;
  private rule_validator: DeclarationRuleValidator;

  constructor(
    private compiler_output: HTMLInputElement,
    debug_mode: boolean,
  ) {
    super();
    this.print_fn = print(debug_mode);
    this.rule_validator = new DeclarationRuleValidator(debug_mode);
  }

  defaultResult(): boolean {
    return true;
  }

  aggregateResult(aggregate: boolean, nextResult: boolean): boolean {
    return aggregate && nextResult;
  }

  visitProgram(ctx: ProgramContext): boolean {
    this.print_fn("Visiting program");
    const has_legal_syntax = this.rule_validator.visit(ctx);

    if (has_legal_syntax.ok) {
      this.print_fn("Declarations are legal");
      return true;
    } else {
      this.compiler_output.value = has_legal_syntax.error.message;
      return false;
    }
  }
}
