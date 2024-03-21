import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Validator } from './types';
import { print } from './utils';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { Function_bodyContext, Function_declarationContext } from '../grammars/Rust1Parser';
import { visitFunctionBody } from 'typescript';

/**
 * Implements the rule: all variables must be declared at most once before they are used.
 */

export class SyntaxValidator extends AbstractParseTreeVisitor<boolean> implements Validator {
    rule_name: string = "Syntax";
    private print_fn: (message?: any, ...optionalParams: any[]) => void;

    constructor(private debug_mode: boolean) {
        super();
        this.print_fn = print(debug_mode);
    }

    defaultResult() {
        return true;
    }

    aggregateResult(aggregate: boolean, nextResult: boolean) {
        return aggregate && nextResult;
    }

    visitFunction_declaration(ctx: Function_declarationContext): boolean {
        // If function has a non-empty return type, it must have a return statement
        // If function has a empty return type, it must not have a return statement

        const return_type_string = ctx.type().text;
        console.log(return_type_string);

        const has_empty_return_type = return_type_string === "()";
        const body = ctx.function_body();

        return this.have_return_statement(body, !has_empty_return_type);
    }

    visitErrorNode(node: ErrorNode): boolean {
        this.print_fn("Visiting error node");
        return false;
    }

    have_return_statement(body: Function_bodyContext, expect_return_statement: boolean): boolean {
        const return_statements = body.block().statement().filter(statement => statement.return_expression() !== undefined);

        if (expect_return_statement && return_statements.length === 0) {
            this.print_fn("No return statement found but expecting one");
            return false;
        } else if (!expect_return_statement && return_statements.length > 0) {
            this.print_fn("Return statement found but not expecting one");
            return false;
        }

        return true;
    }
}