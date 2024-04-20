import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { Validator } from "./types";
import { print, Result } from "../utils";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";
import {
  Break_keywordContext,
  ClosureContext,
  Function_applicationContext,
  Function_bodyContext,
  Loop_expressionContext,
  ProgramContext,
} from "../grammars/Rust2Parser";
import { SyntaxError } from "./utils/errors";

class SyntaxRuleValidator
  extends AbstractParseTreeVisitor<Result<boolean>>
  implements RustVisitor<Result<boolean>>
{
  rule_name: string = "Syntax";
  private print_fn: (message?: any, ...optionalParams: any[]) => void;
  private scoped_threads: number = 0;
  private loop_depth: number = 0;

  constructor(debug_mode: boolean) {
    super();
    this.print_fn = print(debug_mode);
  }

  defaultResult(): Result<boolean> {
    return {
      ok: true,
      value: true,
    };
  }

  aggregateResult(aggregate: Result<boolean>, nextResult: Result<boolean>) {
    if (!aggregate.ok) {
      return aggregate;
    }

    if (!nextResult.ok) {
      return nextResult;
    }

    return aggregate && nextResult;
  }

  visitErrorNode(node: ErrorNode): Result<boolean> {
    this.print_fn("Visiting error node");

    return {
      ok: false,
      error: new SyntaxError(
        node.symbol.line,
        node.text +
          " at column " +
          node.symbol.charPositionInLine +
          " is not allowed",
      ),
    };
  }

  visitFunction_application(ctx: Function_applicationContext): Result<boolean> {
    this.print_fn("Visiting function_application");
    const function_name = ctx.function_name().text;
    if (function_name === "scoped_threads") {
      // Inside scoped_threads context -> safe to call scope_spawn
      this.scoped_threads++;
      const results = this.visitChildren(ctx);
      this.scoped_threads--;
      return results;
    }

    if (function_name === "scope_spawn" && this.scoped_threads === 0) {
      return {
        ok: false,
        error: new SyntaxError(
          ctx.start.line,
          "scope_spawn cannot be called outside of context defined by scoped_threads",
        ),
      };
    }
    return this.visitChildren(ctx);
  }

  visitLoop_expression(ctx: Loop_expressionContext): Result<boolean> {
    this.print_fn("Visiting loop");
    this.loop_depth++;
    const results = this.visitChildren(ctx);
    this.loop_depth--;
    return results;
  }

  visitBreak_keyword(ctx: Break_keywordContext): Result<boolean> {
    this.print_fn("Visiting break_keyword");
    if (this.loop_depth === 0) {
      return {
        ok: false,
        error: new SyntaxError(ctx.start.line, "break` outside of a loop"),
      };
    }
    return this.visitChildren(ctx);
  }

  visitClosure(ctx: ClosureContext): Result<boolean> {
    this.print_fn("Visiting closure");
    const current_loop_depth = this.loop_depth;
    this.loop_depth = 0;
    const results = this.visitChildren(ctx);
    this.loop_depth = current_loop_depth;
    return results;
  }

  visitFunction_body(ctx: Function_bodyContext): Result<boolean> {
    this.print_fn("Visiting function_body");
    const current_loop_depth = this.loop_depth;
    this.loop_depth = 0;
    const results = this.visitChildren(ctx);
    this.loop_depth = current_loop_depth;
    return results;
  }
}

export class SyntaxValidator
  extends AbstractParseTreeVisitor<boolean>
  implements Validator
{
  rule_name: string = "Syntax";
  private print_fn: (message?: any, ...optionalParams: any[]) => void;
  private rule_validator: SyntaxRuleValidator;

  constructor(
    private compiler_output: HTMLInputElement,
    debug_mode: boolean,
  ) {
    super();
    this.print_fn = print(debug_mode);
    this.rule_validator = new SyntaxRuleValidator(debug_mode);
  }

  defaultResult() {
    return true;
  }

  aggregateResult(aggregate: boolean, nextResult: boolean): boolean {
    return aggregate && nextResult;
  }

  visitProgram(ctx: ProgramContext): boolean {
    this.print_fn("Visiting program");
    const has_legal_syntax = this.rule_validator.visit(ctx);

    if (has_legal_syntax.ok) {
      this.print_fn("Syntax is legal");
      return true;
    } else {
      this.compiler_output.value = has_legal_syntax.error.message + "\n";
      return false;
    }
  }
}
