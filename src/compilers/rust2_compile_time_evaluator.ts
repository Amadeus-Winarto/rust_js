import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ExpressionContext } from "../grammars/Rust2Parser";
import { Result } from "../utils";
import { Operand, CompilerError } from "./compiler";

export class Rust2CompileTimeEvaluator extends AbstractParseTreeVisitor<
  Result<Operand, CompilerError>
> {
  language_version: string = "Rust2";

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

    // Case 2: Parenthesized expression
    const parenthesized_ctx = ctx.parens_expression();
    if (parenthesized_ctx !== undefined) {
      return this.visitExpression(parenthesized_ctx.expression()!);
    }

    // Case 3: Expression binop expression
    const binary_operator_ctx = ctx.binary_operator();
    if (binary_operator_ctx !== undefined) {
      const left = this.visitExpression(ctx.expression(0)!);
      if (!left.ok) {
        return left;
      }

      const right = this.visitExpression(ctx.expression(1)!);
      if (!right.ok) {
        return right;
      }

      const operator = binary_operator_ctx.text;
      return {
        ok: true,
        value: eval(`${left.value} ${operator} ${right.value}`),
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
