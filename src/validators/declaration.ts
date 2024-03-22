import { BlockContext, Constant_declarationContext, ExpressionContext, Function_declarationContext, Parameter_listContext, ProgramContext, StatementContext, Variable_declarationContext } from '../grammars/Rust1Parser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Validator, Scope, printScopes, TypeAnnotation, value_to_type } from './types';
import { print, add_to_scope, in_scope_untyped } from '../utils';

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
        const type = new TypeAnnotation(value_to_type(ctx.type().text));

        if (in_scope_untyped(this.scope, name)) {
            this.print_fn("Error: constant name '", name, "' already declared in this scope");
            return false;
        }

        add_to_scope(this.scope, name, type);
        printScopes(this.debug_mode, "Current scope", this.scope);
        return this.visitChildren(ctx);
    }

    visitVariable_declaration(ctx: Variable_declarationContext): boolean {
        this.print_fn("Visiting variable_declaration");
        const name = ctx.var_name().text;
        const type = new TypeAnnotation(value_to_type(ctx.type().text));

        if (in_scope_untyped(this.scope, name)) {
            this.print_fn("Error: variable name '", name, "' already declared in this scope");
            return false;
        }
        add_to_scope(this.scope, name, type);
        printScopes(this.debug_mode, "Current scope", this.scope);

        return this.visitChildren(ctx);
    }

    visitFunction_declaration(ctx: Function_declarationContext): boolean {
        this.print_fn("Visiting function_declaration");
        const name = ctx.function_name().text;
        const type = new TypeAnnotation(value_to_type("function"));

        // Register function name in current scope
        if (in_scope_untyped(this.scope, name)) {
            this.print_fn("Error: function name '", name, "' already declared in this scope");
            return false;
        }
        add_to_scope(this.scope, name, type);
        printScopes(this.debug_mode, "Current scope", this.scope);

        this.print_fn("Creating new scope for function parameters")
        this.scope.push(new Map());
        const result = this.visitChildren(ctx);
        this.scope.pop();
        return result;
    }

    visitParameter_list(ctx: Parameter_listContext): boolean {
        this.print_fn("Visiting parameter_list");

        // Register parameters in current scope
        const maybe_params = ctx.parameters();
        if (maybe_params !== undefined) {
            const params = maybe_params.parameter();
            for (const param of params) {
                const name = param.IDENTIFIER().text;
                const type = new TypeAnnotation(value_to_type(param.type().text));

                if (in_scope_untyped(this.scope, name)) {
                    this.print_fn("Error: parameter name '", name, "' already declared in this scope");
                    return false;
                }
                add_to_scope(this.scope, name, type);
            }
        }

        printScopes(this.debug_mode, "Current scope", this.scope);
        const result = this.visitChildren(ctx);
        return result;
    }

    visitExpression(ctx: ExpressionContext): boolean {
        this.print_fn("Visiting expression");

        // Case 1: Literal
        const literal_ctx = ctx.literal();
        if (literal_ctx !== undefined) {
            return true;
        }

        // Case 2: Name
        const name_ctx = ctx.name();
        if (name_ctx !== undefined) {
            const name = name_ctx.text;
            if (!in_scope_untyped(this.scope, name)) {
                this.print_fn("Error: name '", name, "' not declared in this scope");
                return false;
            }

            return true;
        }

        // Case 3: All other cases
        return this.visitChildren(ctx);
    }
}