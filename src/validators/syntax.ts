import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Validator } from './types';
import { print, Result } from '../utils';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { Rust1Visitor as RustVisitor } from '../grammars/Rust1Visitor';
import { Function_bodyContext, Function_declarationContext, ProgramContext, Return_expressionContext } from '../grammars/Rust1Parser';

class SyntaxError extends Error {
    constructor(line_number: number, message: string) {
        super("Line " + line_number + ": " + message);
        this.name = "SyntaxError";
    }
}

/**
 * Implements the rule: all variables must be declared at most once before they are used.
 */

class SyntaxRuleValidator extends AbstractParseTreeVisitor<Result<boolean>> implements RustVisitor<Result<boolean>> {
    rule_name: string = "Syntax";
    private print_fn: (message?: any, ...optionalParams: any[]) => void;

    constructor(debug_mode: boolean) {
        super();
        this.print_fn = print(debug_mode);
    }

    defaultResult(): Result<boolean> {
        return {
            ok: true,
            value: true
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

    visitFunction_declaration(ctx: Function_declarationContext): Result<boolean> {
        // If function has a non-empty return type, it must have a return statement
        // If function has a empty return type, it must not have a return statement

        const return_type_string = ctx.type().text;

        const has_empty_return_type = return_type_string === "()";
        const body = ctx.function_body();

        return this.have_return_statement(body, !has_empty_return_type);
    }

    visitErrorNode(node: ErrorNode): Result<boolean> {
        this.print_fn("Visiting error node");

        return {
            ok: false,
            error: new SyntaxError(
                node.symbol.line,
                node.text + " at column " + node.symbol.charPositionInLine + " is not allowed")
        }
    }

    have_return_statement(body: Function_bodyContext, expect_return_statement: boolean): Result<boolean> {
        const return_statements = body.block().statement().filter(statement => statement.return_expression() !== undefined);

        if (expect_return_statement && return_statements.length === 0) {
            this.print_fn("No return statement found but expecting one");
            return {
                ok: false,
                error: new SyntaxError(
                    body.start.line,
                    "No return statement found but expecting one")
            }
        } else if (!expect_return_statement && return_statements.length > 0) {
            this.print_fn("Return statement found but not expecting one");
            return {
                ok: false,
                error: new SyntaxError(
                    body.start.line,
                    "Return statement found but not expecting one")
            }
        }

        return {
            ok: true,
            value: true
        }
    }

    visitReturn_expression(ctx: Return_expressionContext): Result<boolean> {
        const line_number = ctx.start.line;
        this.print_fn("Not expecting return statement at line " + line_number);

        return {
            ok: false,
            error: new SyntaxError(
                line_number,
                "Not expecting return statement")
        }
    }
}

export class SyntaxValidator extends AbstractParseTreeVisitor<boolean> implements Validator {
    rule_name: string = "Syntax";
    private print_fn: (message?: any, ...optionalParams: any[]) => void;
    private rule_validator: SyntaxRuleValidator;

    constructor(debug_mode: boolean) {
        super()
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
            console.error(has_legal_syntax.error);
            return false;
        }
    }
}