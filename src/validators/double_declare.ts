import { BlockContext, Constant_declarationContext, ExpressionContext, Function_declarationContext, ProgramContext, StatementContext, Variable_declarationContext } from '../grammars/Rust1Parser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Validator, Scope, printScopes } from './types';
import { print } from './utils';

/**
 * Implements the rule: all variables must be declared at most once before they are used.
 */

export class DeclarationValidator extends AbstractParseTreeVisitor<boolean> implements Validator {
    rule_name: string = "NoDoubleDeclare + DeclareBeforeUse";
    private scope: Scope[] = [];
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

    visitProgram(ctx: ProgramContext): boolean {
        this.print_fn("Visiting program -> Initialising scope");
        this.scope = [new Map()];
        return this.visitChildren(ctx);
    }

    visitBlock(ctx: BlockContext): boolean {
        this.print_fn("Visiting block -> Creating new scope");
        this.scope.push(new Map());
        const result = this.visitChildren(ctx);
        this.scope.pop();
        return result;
    }

    visitConstant_declaration(ctx: Constant_declarationContext): boolean {
        this.print_fn("Visiting constant_declaration");
        const name = ctx.const_name().text;
        const type = ctx.type().text;
        const last_idx = this.scope.length - 1;

        if (this.scope[last_idx].has(name)) {
            this.print_fn("Error: constant name '", name, "' already declared in this scope");
            return false;
        }

        this.scope[last_idx].set(name, type);
        printScopes(this.debug_mode, "Current scope", this.scope);
        return this.visitChildren(ctx);
    }

    visitVariable_declaration(ctx: Variable_declarationContext): boolean {
        this.print_fn("Visiting variable_declaration");
        const name = ctx.var_name().text;
        const type = ctx.type().text;
        const last_idx = this.scope.length - 1;

        if (this.scope[last_idx].has(name)) {
            this.print_fn("Error: variable name '", name, "' already declared in this scope");
            return false;
        }
        this.scope[last_idx].set(name, type);
        printScopes(this.debug_mode, "Current scope", this.scope);

        return this.visitChildren(ctx);
    }

    visitFunction_declaration(ctx: Function_declarationContext): boolean {
        this.print_fn("Visiting function_declaration -> Creating new scope");
        const name = ctx.function_name().text;
        const type = "function"
        const last_idx = this.scope.length - 1;

        if (this.scope[last_idx].has(name)) {
            this.print_fn("Error: function name '", name, "' already declared in this scope");
            return false;
        }
        this.scope[last_idx].set(name, type);
        this.scope.push(new Map());
        const result = this.visitChildren(ctx);
        this.scope.pop();
        return result;
    }

    visitExpression(ctx: ExpressionContext): boolean {
        this.print_fn("Visiting expression");
        const last_idx = this.scope.length - 1;


        // Case 1: Literal
        const literal_ctx = ctx.literal();
        if (literal_ctx !== undefined) {
            return true;
        }

        // Case 2: Name
        const name_ctx = ctx.name();
        if (name_ctx !== undefined) {
            const name = name_ctx.text;
            if (!this.scope[last_idx].has(name)) {
                this.print_fn("Error: name '", name, "' not declared in this scope");
                return false;
            }

            return true;
        }

        // Case 3: All other cases
        return this.visitChildren(ctx);
    }
}