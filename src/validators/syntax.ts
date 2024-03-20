import { BlockContext, Constant_declarationContext, ExpressionContext, Function_declarationContext, ProgramContext, StatementContext, Variable_declarationContext } from '../grammars/Rust1Parser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Validator, Scope, printScopes } from './types';
import { print } from './utils';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

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


    visitErrorNode(node: ErrorNode): boolean {
        this.print_fn("Visiting error node");
        return false;
    }
}