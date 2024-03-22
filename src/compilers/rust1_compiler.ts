import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Instructions, Compiler, PrimitiveTypeToOpcode, CompilerError, Environment, StoreOpcodeByType, name_lookup, LoadPrimitiveFromEnvByType } from './compiler';
import { print, Result } from '../utils';
import {
    ProgramContext,
    Boolean_literalContext,
    Constant_declarationContext,
    Float_literalContext,
    Integer_literalContext,
    String_literalContext,
    Variable_declarationContext,
    Binary_logical_operatorContext,
    ExpressionContext,
    Function_declarationContext,
    BlockContext,
    Cond_exprContext,
    Function_applicationContext,
    Function_bodyContext,
    If_expressionContext,
    Parameter_listContext,
    ParameterContext,
    ParametersContext,
    Return_expressionContext,
    StatementContext
} from '../grammars/Rust1Parser';

type CompilerOutput = Result<Instructions, CompilerError>;

export class Rust1Compiler extends AbstractParseTreeVisitor<CompilerOutput> implements Compiler {
    language_version: string = "Rust1";
    private environments: Environment[] = [];
    private print_fn: (message?: any, ...optionalParams: any[]) => void;

    constructor(debug_mode: boolean) {
        super();
        this.print_fn = print(debug_mode);
    }

    defaultResult(): CompilerOutput {
        return {
            ok: true,
            value: []
        };
    }

    aggregateResult(aggregate: CompilerOutput, nextResult: CompilerOutput): CompilerOutput {
        if (!aggregate.ok) {
            return aggregate;
        }

        if (!nextResult.ok) {
            return nextResult;
        }

        return {
            ok: true,
            value: aggregate.value.concat(nextResult.value)
        };
    }

    visitProgram(ctx: ProgramContext): CompilerOutput {
        this.print_fn("Visiting program");
        // Create a new environment (global)
        this.environments.push(
            new Environment());
        return this.visitChildren(ctx);
    }

    visitInteger_literal(ctx: Integer_literalContext): CompilerOutput {
        this.print_fn("Visiting integer_literal");
        const value = parseInt(ctx.text);
        return {
            ok: true,
            value: [{ opcode: PrimitiveTypeToOpcode.get("i32")!, operands: [value] }]
        };
    }

    visitFloat_literal(ctx: Float_literalContext): CompilerOutput {
        this.print_fn("Visiting float_literal");
        const value = parseFloat(ctx.text);
        return {
            ok: true,
            value: [{ opcode: PrimitiveTypeToOpcode.get("f32")!, operands: [value] }]
        };
    }

    visitString_literal(ctx: String_literalContext): CompilerOutput {
        this.print_fn("Visiting string_literal");
        const value = ctx.text;
        return {
            ok: true,
            value: [{ opcode: PrimitiveTypeToOpcode.get("string")!, operands: [value] }]
        };
    }

    visitBoolean_literal(ctx: Boolean_literalContext): CompilerOutput {
        this.print_fn("Visiting boolean_literal");
        const value = ctx.text;
        return {
            ok: true,
            value: [{ opcode: PrimitiveTypeToOpcode.get(value)!, operands: [] }]
        };
    }

    visitConstant_declaration(ctx: Constant_declarationContext): CompilerOutput {
        this.print_fn("Visiting constant_declaration");
        const name = ctx.const_name().text;
        this.print_fn("Constant name: ", name);

        // Compile the expression
        const maybe_compiled_expression = this.visit(ctx.expression());
        if (!maybe_compiled_expression.ok) {
            return maybe_compiled_expression;
        }
        const compiled_expression = maybe_compiled_expression.value;


        // Get appropriate opcode for the type
        const type = ctx.type().text;
        const maybe_opcode = StoreOpcodeByType.get(type);
        if (!maybe_opcode) {
            this.print_fn("Error: unknown type ", type);
            return {
                ok: false,
                error: new CompilerError(ctx.start.line, "Unknown type")
            };
        }
        const opcode = maybe_opcode;

        // Add the opcode to the compiled expression
        const current_env = this.environments[this.environments.length - 1];
        const index = current_env.push(name, type);
        // VM Requirement: At most 2**8 = 256 variables can be declared in a scope
        if (index >= 256) {
            this.print_fn("Error: too many variables in scope");
            return {
                ok: false,
                error: new CompilerError(ctx.start.line, "Too many variables in scope")
            };
        }

        const instructions = compiled_expression.concat([
            { opcode: opcode, operands: [index] }
        ]);

        return {
            ok: true,
            value: instructions
        };
    }

    visitVariable_declaration(ctx: Variable_declarationContext): CompilerOutput {
        this.print_fn("Visiting constant_declaration");
        const name = ctx.var_name().text;
        this.print_fn("Constant name: ", name);

        // Compile the expression
        const maybe_compiled_expression = this.visit(ctx.expression());
        if (!maybe_compiled_expression.ok) {
            return maybe_compiled_expression;
        }
        const compiled_expression = maybe_compiled_expression.value;


        // Get appropriate opcode for the type
        const type = ctx.type().text;
        const maybe_opcode = StoreOpcodeByType.get(type);
        if (!maybe_opcode) {
            this.print_fn("Error: unknown type ", type);
            return {
                ok: false,
                error: new CompilerError(ctx.start.line, "Unknown type")
            };
        }
        const opcode = maybe_opcode;

        // Add the opcode to the compiled expression
        const current_env = this.environments[this.environments.length - 1];
        const index = current_env.push(name, type);
        // VM Requirement: At most 2**8 = 256 variables can be declared in a scope
        if (index >= 256) {
            this.print_fn("Error: too many variables in scope");
            return {
                ok: false,
                error: new CompilerError(ctx.start.line, "Too many variables in scope")
            };
        }

        const instructions = compiled_expression.concat([
            { opcode: opcode, operands: [index] }
        ]);

        return {
            ok: true,
            value: instructions
        };
    }

    visitExpression(ctx: ExpressionContext): CompilerOutput {
        this.print_fn("Visiting expression");

        // Case 1: literal
        const literal_ctx = ctx.literal();
        if (literal_ctx !== undefined) {
            const maybe_boolean_literal = literal_ctx.boolean_literal();
            if (maybe_boolean_literal !== undefined) {
                return this.visitBoolean_literal(maybe_boolean_literal);
            }

            const maybe_integer_literal = literal_ctx.integer_literal();
            if (maybe_integer_literal !== undefined) {
                return this.visitInteger_literal(maybe_integer_literal);
            }

            const maybe_float_literal = literal_ctx.float_literal();
            if (maybe_float_literal !== undefined) {
                return this.visitFloat_literal(maybe_float_literal);
            }

            const maybe_string_literal = literal_ctx.string_literal();
            if (maybe_string_literal !== undefined) {
                return this.visitString_literal(maybe_string_literal);
            }

            return {
                ok: false,
                error: new CompilerError(ctx.start.line, "Unknown literal. This should not happen.")
            };
        }

        // Case 2: Name
        const name_ctx = ctx.name();
        if (name_ctx !== undefined) {
            const name = name_ctx.text;
            const maybe_lookup_success = name_lookup(this.environments, name);
            if (maybe_lookup_success === undefined) {
                return {
                    ok: false,
                    error: new CompilerError(ctx.start.line, "Unknown variable. This should not happen.")
                };
            }

            const current_env_index = this.environments.length - 1;
            const [env_index, index] = maybe_lookup_success;
            if (index === -1) {
                return {
                    ok: false,
                    error: new CompilerError(ctx.start.line, "Unknown variable")
                };
            }

            const type = this.environments[env_index].get_type(index);
            const parent_index = current_env_index - env_index;

            return {
                ok: true,
                value: [{ opcode: LoadPrimitiveFromEnvByType.get(type)!, operands: [index, parent_index] }]
            };
        }

        // Case 3: Expression binary_operator Expression
        const binary_operator_ctx = ctx.binary_operator();
        if (binary_operator_ctx !== undefined) {
            const left_instrs = this.visit(ctx.expression(0));
            if (!left_instrs.ok) {
                return left_instrs;
            }

            const right_instrs = this.visit(ctx.expression(1));
            if (!right_instrs.ok) {
                return right_instrs;
            }

            // TODO: Get the opcode for the binary operator by type


            return {
                ok: false,
                error: new CompilerError(ctx.start.line, "Not implemented: Expression")
            };
        }

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Expression")
        }
    }

    visitBinary_logical_operator(ctx: Binary_logical_operatorContext): CompilerOutput {
        this.print_fn("Visiting binary_logical_operator");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Binary_logical_operator")
        }
    }

    // visitStatement(ctx: StatementContext): CompilerOutput {
    //     this.print_fn("Visiting statement");

    //     return {
    //         ok: false,
    //         error: new CompilerError(ctx.start.line, "Not implemented: Statement")
    //     }
    // }

    visitFunction_declaration(ctx: Function_declarationContext): CompilerOutput {
        this.print_fn("Visiting function_declaration");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Function_declaration")
        }
    }

    visitReturn_expression(ctx: Return_expressionContext): CompilerOutput {
        this.print_fn("Visiting return_expression");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Return_expression")
        }
    }

    visitIf_expression(ctx: If_expressionContext): CompilerOutput {
        this.print_fn("Visiting if_expression");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: If_expression")
        }
    }

    visitCond_expr(ctx: Cond_exprContext): CompilerOutput {
        this.print_fn("Visiting cond_expr");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Cond_expr")
        }
    }

    visitFunction_application(ctx: Function_applicationContext): CompilerOutput {
        this.print_fn("Visiting function_application");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Function_application")
        }
    }

    visitBlock(ctx: BlockContext): CompilerOutput {
        this.print_fn("Visiting block");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Block")
        }
    }

    visitFunction_body(ctx: Function_bodyContext): CompilerOutput {
        this.print_fn("Visiting function_body");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Function_body")
        }
    }

    visitParameter_list(ctx: Parameter_listContext): CompilerOutput {
        this.print_fn("Visiting parameter_list");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Parameter_list")
        }
    }

    visitParameter(ctx: ParameterContext): CompilerOutput {
        this.print_fn("Visiting parameter");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Parameter")
        }
    }

    visitParameters(ctx: ParametersContext): CompilerOutput {
        this.print_fn("Visiting parameters");

        return {
            ok: false,
            error: new CompilerError(ctx.start.line, "Not implemented: Parameters")
        }
    }
}

