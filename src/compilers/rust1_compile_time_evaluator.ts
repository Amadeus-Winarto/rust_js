import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ExpressionContext } from "../grammars/Rust1Parser";
import { Result } from "../utils";
import { Operand, CompilerError } from "./compiler";

export class Rust1CompileTimeEvaluator extends AbstractParseTreeVisitor<
  Result<Operand, CompilerError>
> {
  language_version: string = "Rust1";

  defaultResult(): Result<Operand, CompilerError> {
    return {
      ok: true,
      value: NaN,
    };
  }

  aggregateResult(
    aggregate: Result<Operand, CompilerError>,
    nextResult: Result<Operand, CompilerError>,
  ): Result<Operand, CompilerError> {
    if (!aggregate.ok) {
      return aggregate;
    }

    if (!nextResult.ok) {
      return nextResult;
    }

    return {
      ok: true,
      value: nextResult.value,
    };
  }

  visitExpression(ctx: ExpressionContext): Result<Operand, CompilerError> {
    // Case 1: Literal
    const literal_ctx = ctx.literal();
    if (literal_ctx !== undefined) {
      return literal_ctx.boolean_literal() !== undefined
        ? { ok: true, value: eval(literal_ctx.boolean_literal()!.text) }
        : literal_ctx.integer_literal() !== undefined
          ? { ok: true, value: parseInt(literal_ctx.integer_literal()!.text) }
          : literal_ctx.float_literal() !== undefined
            ? { ok: true, value: parseFloat(literal_ctx.float_literal()!.text) }
            : literal_ctx.string_literal() !== undefined
              ? { ok: true, value: literal_ctx.string_literal()!.text }
              : {
                  ok: false,
                  error: new CompilerError(ctx.start.line, "Unknown literal"),
                };
    }

    // Disallow all other cases for now
    return {
      ok: false,
      error: new CompilerError(
        ctx.start.line,
        "Not implemented: Only literals are allowed in compile-time expressions",
      ),
    };
  }
}
