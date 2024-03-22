import { BlockContext, Cond_exprContext, Constant_declarationContext, ExpressionContext, Function_declarationContext, Parameter_listContext, ProgramContext, Variable_declarationContext } from '../grammars/Rust1Parser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Validator, Scope, Result, TypeAnnotation, TypeTag, value_to_type, is_integer, is_float, is_bool, is_promotable, is_comparison_operator } from './types';
import { print, add_to_scope, get_type } from './utils';
import { Rust1Visitor as RustVisitor } from '../grammars/Rust1Visitor';

class TypeProducer extends AbstractParseTreeVisitor<Result<TypeAnnotation>> implements RustVisitor<Result<TypeAnnotation>> {
    private scope: Scope[] = [];
    private print_fn: (message?: any, ...optionalParams: any[]) => void;

    constructor(private debug_mode: boolean) {
        super();
        this.print_fn = print(debug_mode);
    }

    defaultResult(): Result<TypeAnnotation> {
        return {
            ok: true,
            value: new TypeAnnotation(TypeTag.unknown)
        };
    }

    aggregateResult(aggregate: Result<TypeAnnotation>, nextResult: Result<TypeAnnotation>): Result<TypeAnnotation> {
        if (!aggregate.ok) {
            return aggregate;
        } else if (!nextResult.ok) {
            return nextResult;
        }

        return {
            ok: true,
            value: nextResult.value
        };
    }

    visitProgram(ctx: ProgramContext): Result<TypeAnnotation> {
        this.print_fn("Checking program type");
        this.scope = [new Map()];

        // Initialise with common types and functions
        add_to_scope(this.scope, "println!", new TypeAnnotation(TypeTag.function, "<...> -> ()"));
        return this.visitChildren(ctx);
    }

    visitBlock(ctx: BlockContext): Result<TypeAnnotation> {
        this.print_fn("Checking block type");
        this.scope.push(new Map());
        const result = this.visitChildren(ctx);
        this.scope.pop();
        return result;
    }

    visitConstant_declaration(ctx: Constant_declarationContext): Result<TypeAnnotation> {
        const name = ctx.const_name().text;
        const type = new TypeAnnotation(value_to_type(ctx.type().text));
        add_to_scope(this.scope, name, type);
        return this.visitChildren(ctx);
    }

    visitVariable_declaration(ctx: Variable_declarationContext): Result<TypeAnnotation> {
        const name = ctx.var_name().text;
        const type = new TypeAnnotation(value_to_type(ctx.type().text));
        add_to_scope(this.scope, name, type);
        return this.visitChildren(ctx);
    }

    visitFunction_declaration(ctx: Function_declarationContext): Result<TypeAnnotation> {
        const name = ctx.function_name().text;

        // Extract parameter types first
        let parameter_types = [];
        const maybe_parameter_list = ctx.parameter_list();
        if (maybe_parameter_list === undefined) {
            return {
                ok: false,
                error: new Error(`Line ${ctx.start.line}: function '${name}' has no parameters. This is a SyntaxError!`)
            };
        }

        const maybe_params = maybe_parameter_list.parameters();
        if (maybe_params !== undefined) {
            const params = maybe_params.parameter();
            for (const param of params) {
                const type = new TypeAnnotation(value_to_type(param.type().text));
                parameter_types.push(type);
            }
        }
        const parameter_type = "<" + parameter_types.map(t => t.type.toString()).join(", ") + ">";

        // Extract return type
        const return_type = ctx.type().text;

        // Register function in current scope
        const type = new TypeAnnotation(value_to_type("function"), parameter_type + " -> " + return_type);
        this.print_fn("Adding function ", name, " to scope with type ", type.value);
        add_to_scope(this.scope, name, type);
        this.scope.push(new Map());
        const result = this.visitChildren(ctx);

        // Make sure all return statements have the same type as the function's return type
        const maybe_body = ctx.function_body();
        const return_statements = maybe_body !== undefined
            ? maybe_body.block().statement()
                .map(s => s.return_expression())
                .filter(s => s !== undefined)
            : [];

        if (return_statements.length === 0 && return_type !== "()") {
            return {
                ok: false,
                error: new Error(`Line ${ctx.start.line}: function '${name}' expects a return statement but none found. There's a bug in the TypeValidator!`)
            };
        }

        const return_type_tag = value_to_type(return_type);
        for (const return_statement of return_statements) {
            const actual_return_type = this.visit(return_statement);
            if (!actual_return_type.ok) {
                return actual_return_type;
            }

            if (return_type_tag !== actual_return_type.value.type && !is_promotable(actual_return_type.value.type, return_type_tag)) {
                return {
                    ok: false,
                    error: new Error(`Line ${ctx.start.line}: function '${name}' expects return type ${return_type} but got ${actual_return_type.value.type}`)
                };
            }
        }

        this.scope.pop();
        return result;
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
        this.print_fn("Checking expression type");
        const literal_ctx = ctx.literal();
        if (literal_ctx !== undefined) {
            return literal_ctx.boolean_literal()
                ? {
                    ok: true,
                    value: new TypeAnnotation(TypeTag.bool)
                }
                : literal_ctx.float_literal()
                    ? {
                        ok: true,
                        value: new TypeAnnotation(TypeTag.float_literal)
                    }
                    : literal_ctx.integer_literal()
                        ? {
                            ok: true,
                            value: new TypeAnnotation(TypeTag.integer_literal)
                        }
                        : literal_ctx.string_literal()
                            ? {
                                ok: true,
                                value: new TypeAnnotation(TypeTag.string)
                            }
                            : {
                                ok: false,
                                error: new Error(`Line ${ctx.start.line}: ${literal_ctx.text} is not a valid literal`)
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
                    error: new Error(`Line ${line_number}: name '${name}' not declared in this scope`)
                };
            }

            return {
                ok: true,
                value: maybe_type
            };
        }

        // Case 3: Expression BinOp Expression
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
                            error: new Error(`Line ${ctx.start.line}: type mismatch: operator ${binop_ctx.text} does not support types ${left_type} and ${right_type}`)
                        };
                    }

                    const result_type = is_comparison_operator(binop_ctx.text) ? new TypeAnnotation(TypeTag.bool) : new TypeAnnotation(left_type);
                    return {
                        ok: true,
                        value: result_type
                    };
                } else {
                    // Lazily-evaluated type --> the other type must be the same as the non-lazily-evaluated type

                    return left_type === TypeTag.integer_literal
                        ? {
                            ok: true,
                            value: is_comparison_operator(binop_ctx.text) ? new TypeAnnotation(TypeTag.bool) : new TypeAnnotation(right_type)
                        }
                        : {
                            ok: true,
                            value: is_comparison_operator(binop_ctx.text) ? new TypeAnnotation(TypeTag.bool) : new TypeAnnotation(left_type)
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
                            error: new Error(`Line ${ctx.start.line}: type mismatch: operator ${binop_ctx.text} does not support types ${left_type} and ${right_type}`)
                        };
                    }

                    const result_type = is_comparison_operator(binop_ctx.text) ? new TypeAnnotation(TypeTag.bool) : new TypeAnnotation(left_type);
                    return {
                        ok: true,
                        value: result_type
                    };
                } else {
                    return left_type === TypeTag.float_literal
                        ? {
                            ok: true,
                            value: is_comparison_operator(binop_ctx.text) ? new TypeAnnotation(TypeTag.bool) : new TypeAnnotation(right_type)
                        }
                        : {
                            ok: true,
                            value: is_comparison_operator(binop_ctx.text) ? new TypeAnnotation(TypeTag.bool) : new TypeAnnotation(left_type)
                        };
                }
            }

            return {
                ok: false,
                error: new Error(`Line ${ctx.start.line}: type mismatch: operator ${binop_ctx.text} does not support types ${left_type} and ${right_type}`)
            };

        }

        // Case 4: expression logic_operator expression
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
                    error: new Error(`Line ${ctx.start.line}: type mismatch: operator ${logic_ctx.text} expects boolean types but got ${left_type} and ${right_type}`)
                };
            }

            return {
                ok: true,
                value: new TypeAnnotation(TypeTag.bool)
            };
        }

        // Case 5: Unary operator
        const unary_ctx = ctx.unary_operator();
        if (unary_ctx !== undefined) {
            const expr = this.visit(ctx.expression(0));
            if (!expr.ok) {
                return expr;
            }

            if (is_bool(expr.value.type)) {
                return {
                    ok: true,
                    value: new TypeAnnotation(TypeTag.bool)
                };
            }

            return {
                ok: false,
                error: new Error(`Line ${ctx.start.line}: type mismatch: operator ${unary_ctx.text} expects boolean type but got ${expr.value.type}`)
            };
        }

        // Case 6: function application
        const function_ctx = ctx.function_application();
        if (function_ctx !== undefined) {
            const function_name = function_ctx.function_name().text;
            this.print_fn("Checking function application ", function_name);
            const maybe_type = get_type(this.scope, function_name);
            if (maybe_type === undefined) {
                return {
                    ok: false,
                    error: new Error(`Line ${ctx.start.line}: function '${function_name}' not declared in this scope. This is a SyntaxError!`)
                };
            }

            // Get arguments
            if (maybe_type.value === undefined) {
                return {
                    ok: false,
                    error: new Error(`Line ${ctx.start.line}: function '${function_name}' has no type. This is a TypeValidator bug!`)
                };
            }
            const function_type_string = maybe_type.value;
            const parameter_type_string = function_type_string.split("->")[0].trim().slice(1, -1);
            const return_type_string = function_type_string.split("->")[1].trim();

            const parameter_types = parameter_type_string.split(",").map(t => value_to_type(t.trim()));
            const return_type = value_to_type(return_type_string);

            const args = function_ctx.expression();
            const annotated_arg_types = args.map(arg => this.visit(arg));
            const maybe_error = annotated_arg_types.find(arg => !arg.ok);
            if (maybe_error !== undefined) {
                return maybe_error;
            }
            const arg_types = annotated_arg_types
                .map(arg => arg.ok ? arg.value.type : TypeTag.unknown)
                .filter(t => t !== TypeTag.unknown);

            const parameter_has_unit_type = parameter_types.length === 1 && parameter_types[0] === TypeTag.unit;
            if (parameter_has_unit_type) {
                // Function takes in variable number of arguments of any type --> only println! macro should
                // exhibit this behaviour
                return {
                    ok: true,
                    value: new TypeAnnotation(return_type)
                };
            }

            if (parameter_types.length !== arg_types.length) {
                return {
                    ok: false,
                    error: new Error(`Line ${ctx.start.line}: function '${function_name}' expects ${parameter_types.length} arguments but got ${arg_types.length}`)
                };
            }

            for (let i = 0; i < parameter_types.length; i++) {
                if (parameter_types[i] !== arg_types[i] && !is_promotable(arg_types[i], parameter_types[i])) {
                    return {
                        ok: false,
                        error: new Error(`Line ${ctx.start.line}: type mismatch: function '${function_name}' expects type ${parameter_types[i]} but got ${arg_types[i]}`)
                    };
                }
            }

            return {
                ok: true,
                value: new TypeAnnotation(return_type)
            };
        }

        // Case 7: (expression)
        const paren_ctx = ctx.expression(0);
        if (paren_ctx !== undefined) {
            return this.visit(paren_ctx);
        }

        this.print_fn("\tUnknown expression type!");
        return {
            ok: false,
            error: new Error(`Line ${ctx.start.line}: unknown expression type`)
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
                error: new Error(`Line ${ctx.start.line}: condition expression must be of type bool but got ${result.value.type}`)
            };
        }

        return result;
    }
}

export class TypeSystemValidator extends AbstractParseTreeVisitor<boolean> implements Validator {
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