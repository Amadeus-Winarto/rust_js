import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import {
  Instructions,
  Compiler,
  PrimitiveTypeToOpcode,
  CompilerError,
  Environment,
  name_recursive_lookup,
  Program,
  SVMFunction,
  CompileTimeContext,
} from "./compiler";
import { print, Result } from "../utils";
import {
  ProgramContext,
  Boolean_literalContext,
  Constant_declarationContext,
  Float_literalContext,
  Integer_literalContext,
  String_literalContext,
  Variable_declarationContext,
  ExpressionContext,
  Function_declarationContext,
  BlockContext,
  Cond_exprContext,
  Function_applicationContext,
  Function_bodyContext,
  If_expressionContext,
  Return_expressionContext,
  StatementContext,
  LiteralContext,
  NameContext,
  Binary_operatorContext,
} from "../grammars/Rust1Parser";
import { Rust1CompileTimeEvaluator } from "./rust1_compile_time_evaluator";
import OpCodes from "./opcodes";
import { Rust1Visitor as RustVisitor } from "../grammars/Rust1Visitor";

const VALID_UNARY_OPERATORS = new Map([
  ["!", OpCodes.NOTG],
  ["-", OpCodes.NEGG],
]);
const VALID_BINARY_OPERATORS = new Map([
  ["+", OpCodes.ADDG],
  ["-", OpCodes.SUBG],
  ["*", OpCodes.MULG],
  ["/", OpCodes.DIVG],
  ["%", OpCodes.MODG],
  ["<", OpCodes.LTG],
  [">", OpCodes.GTG],
  ["<=", OpCodes.LEG],
  [">=", OpCodes.GEG],
  ["==", OpCodes.EQG],
  ["!=", OpCodes.NEQG],
]);

type CompilerOutput = Result<Program, CompilerError>;

type Output = {
  max_stack_size: number;
  instructions: Instructions;
};
type InstructionCompilerOutput = Result<Output, CompilerError>;

function add_pop_result_instr(
  output: InstructionCompilerOutput,
): InstructionCompilerOutput {
  if (!output.ok) {
    return output;
  }

  const instructions = output.value.instructions.concat([
    { opcode: OpCodes.POPG, operands: [] },
  ]);

  return {
    ok: true,
    value: {
      max_stack_size: output.value.max_stack_size,
      instructions,
    },
  };
}

function compile_binary_expression(
  binary_operator_ctx: Binary_operatorContext,
  left_instrs: InstructionCompilerOutput,
  right_instrs: InstructionCompilerOutput,
): InstructionCompilerOutput {
  if (!left_instrs.ok) {
    return left_instrs;
  }

  if (!right_instrs.ok) {
    return right_instrs;
  }

  const opcode = VALID_BINARY_OPERATORS.get(binary_operator_ctx.text)!;
  const instructions = left_instrs.value.instructions.concat(
    right_instrs.value.instructions,
    [{ opcode, operands: [] }],
  );
  return {
    ok: true,
    value: {
      max_stack_size:
        1 +
        Math.max(
          left_instrs.value.max_stack_size,
          right_instrs.value.max_stack_size,
        ),
      instructions,
    },
  };
}

function compile_conditional(
  cond_instrs: InstructionCompilerOutput,
  consequent_instrs: InstructionCompilerOutput,
  alternative_instrs: InstructionCompilerOutput,
): InstructionCompilerOutput {
  const instructions = [];
  if (!cond_instrs.ok) {
    return cond_instrs;
  }

  if (!consequent_instrs.ok) {
    return consequent_instrs;
  }

  if (!alternative_instrs.ok) {
    return alternative_instrs;
  }

  const max_stack_size = Math.max(
    cond_instrs.value.max_stack_size,
    consequent_instrs.value.max_stack_size,
    alternative_instrs.value.max_stack_size,
  );

  const BRF_instr = {
    opcode: OpCodes.BRF,
    operands: [2 + consequent_instrs.value.instructions.length],
  };
  const BR_instr = {
    opcode: OpCodes.BR,
    operands: [1 + alternative_instrs.value.instructions.length],
  };

  instructions.push(...cond_instrs.value.instructions);
  instructions.push(BRF_instr);
  instructions.push(...consequent_instrs.value.instructions);
  instructions.push(BR_instr);
  instructions.push(...alternative_instrs.value.instructions);

  return {
    ok: true,
    value: {
      max_stack_size,
      instructions,
    },
  };
}

class Rust1InstructionCompiler
  extends AbstractParseTreeVisitor<InstructionCompilerOutput>
  implements RustVisitor<InstructionCompilerOutput>
{
  language_version: string = "Rust1";

  private environments: Environment[] = [];

  private print_fn: (message?: any, ...optionalParams: any[]) => void;

  constructor(
    private static_context: CompileTimeContext,
    debug_mode: boolean = false,
  ) {
    super();
    this.print_fn = print(debug_mode);
  }

  setEnvironments(envs: Environment[]): void {
    this.environments = envs;
  }

  defaultResult(): InstructionCompilerOutput {
    return {
      ok: true,
      value: {
        max_stack_size: 0,
        instructions: [],
      },
    };
  }

  aggregateResult(
    aggregate: InstructionCompilerOutput,
    nextResult: InstructionCompilerOutput,
  ): InstructionCompilerOutput {
    if (!aggregate.ok) {
      return aggregate;
    }

    if (!nextResult.ok) {
      return nextResult;
    }

    return {
      ok: true,
      value: {
        max_stack_size: Math.max(
          aggregate.value.max_stack_size,
          nextResult.value.max_stack_size,
        ),
        instructions: aggregate.value.instructions.concat(
          nextResult.value.instructions,
        ),
      },
    };
  }

  visitProgram(ctx: ProgramContext): InstructionCompilerOutput {
    return {
      ok: false,
      error: new CompilerError(
        ctx.start.line,
        "InstructionCompiler can only run on blocks and below!. Received Program instead.",
      ),
    };
  }

  visitInteger_literal(ctx: Integer_literalContext): InstructionCompilerOutput {
    this.print_fn("Visiting integer_literal");
    const value = parseInt(ctx.text);
    return {
      ok: true,
      value: {
        max_stack_size: 1,
        instructions: [
          {
            opcode: PrimitiveTypeToOpcode.get("i32")!,
            operands: [value],
          },
        ],
      },
    };
  }

  visitFloat_literal(ctx: Float_literalContext): InstructionCompilerOutput {
    this.print_fn("Visiting float_literal");
    const value = parseFloat(ctx.text);
    return {
      ok: true,
      value: {
        max_stack_size: 1,
        instructions: [
          {
            opcode: PrimitiveTypeToOpcode.get("f32")!,
            operands: [value],
          },
        ],
      },
    };
  }

  visitString_literal(ctx: String_literalContext): InstructionCompilerOutput {
    this.print_fn("Visiting string_literal");
    const value = ctx.text;
    return {
      ok: true,
      value: {
        max_stack_size: 1,
        instructions: [
          {
            opcode: PrimitiveTypeToOpcode.get("string")!,
            operands: [value],
          },
        ],
      },
    };
  }

  visitBoolean_literal(ctx: Boolean_literalContext): InstructionCompilerOutput {
    this.print_fn("Visiting boolean_literal");
    const value = ctx.text;
    return {
      ok: true,
      value: {
        max_stack_size: 1,
        instructions: [
          {
            opcode: PrimitiveTypeToOpcode.get(value)!,
            operands: [],
          },
        ],
      },
    };
  }

  visitConstant_declaration(
    ctx: Constant_declarationContext,
  ): InstructionCompilerOutput {
    this.print_fn("Visiting constant_declaration");
    const name = ctx.const_name().text;
    this.print_fn("Constant name: ", name);

    // Compile the expression
    const maybe_compiled_expression = this.visit(ctx.expression());
    if (!maybe_compiled_expression.ok) {
      return maybe_compiled_expression;
    }
    const compiled_expression = maybe_compiled_expression.value;

    // Add the opcode to the compiled expression
    const current_env = this.environments[this.environments.length - 1];
    const type = ctx.type().text;
    const index = current_env.push(name, type);
    // VM Requirement: At most 2**8 = 256 variables can be declared in a scope
    if (index >= 256) {
      this.print_fn("Error: too many variables in scope");
      return {
        ok: false,
        error: new CompilerError(ctx.start.line, "Too many variables in scope"),
      };
    }

    const instructions = compiled_expression.instructions.concat([
      { opcode: OpCodes.STLG, operands: [index] },
      { opcode: OpCodes.LGCU, operands: [] }, // Result of evaluating a declaration is `undefined`
    ]);

    return {
      ok: true,
      value: {
        max_stack_size: compiled_expression.max_stack_size,
        instructions,
      },
    };
  }

  visitVariable_declaration(
    ctx: Variable_declarationContext,
  ): InstructionCompilerOutput {
    this.print_fn("Visiting variable_declaration");
    const name = ctx.var_name().text;
    this.print_fn("Variable name: ", name);

    // Compile the expression
    const maybe_compiled_expression = this.visit(ctx.expression());
    if (!maybe_compiled_expression.ok) {
      return maybe_compiled_expression;
    }
    const compiled_expression = maybe_compiled_expression.value;

    // Add the opcode to the compiled expression
    const current_env = this.environments[this.environments.length - 1];
    const type = ctx.type().text;
    const index = current_env.push(name, type);
    // VM Requirement: At most 2**8 = 256 variables can be declared in a scope
    if (index >= 256) {
      this.print_fn("Error: too many variables in scope");
      return {
        ok: false,
        error: new CompilerError(ctx.start.line, "Too many variables in scope"),
      };
    }

    const instructions = compiled_expression.instructions.concat([
      { opcode: OpCodes.STLG, operands: [index] },
      { opcode: OpCodes.LGCU, operands: [] }, // Result of evaluating a declaration is `undefined`
    ]);

    return {
      ok: true,
      value: {
        max_stack_size: compiled_expression.max_stack_size,
        instructions,
      },
    };
  }

  visitLiteral(ctx: LiteralContext): InstructionCompilerOutput {
    const maybe_boolean_literal = ctx.boolean_literal();
    if (maybe_boolean_literal !== undefined) {
      return this.visitBoolean_literal(maybe_boolean_literal);
    }

    const maybe_integer_literal = ctx.integer_literal();
    if (maybe_integer_literal !== undefined) {
      return this.visitInteger_literal(maybe_integer_literal);
    }

    const maybe_float_literal = ctx.float_literal();
    if (maybe_float_literal !== undefined) {
      return this.visitFloat_literal(maybe_float_literal);
    }

    const maybe_string_literal = ctx.string_literal();
    if (maybe_string_literal !== undefined) {
      return this.visitString_literal(maybe_string_literal);
    }

    return {
      ok: false,
      error: new CompilerError(
        ctx.start.line,
        "Unknown literal. This should not happen.",
      ),
    };
  }

  visitName(ctx: NameContext): InstructionCompilerOutput {
    const name = ctx.text;
    const maybe_lookup_success = name_recursive_lookup(this.environments, name);
    if (maybe_lookup_success === undefined) {
      // Name not in environment => Shadowing doesn't happen => Name must originate
      // from compile-time context
      const maybe_index = this.static_context.lookup(name);
      if (maybe_index === undefined) {
        return {
          ok: false,
          error: new CompilerError(
            ctx.start.line,
            `Variable ${name} not found in environment or compile-time context. This is a Validator Error.`,
          ),
        };
      }

      const type = this.static_context.get_type(maybe_index);
      const value = this.static_context.get_value(maybe_index);

      return {
        ok: true,
        value: {
          max_stack_size: 1,
          instructions: [
            {
              opcode: PrimitiveTypeToOpcode.get(type)!,
              operands: [value],
            },
          ],
        },
      };
    }

    const current_env_index = this.environments.length - 1;
    const [env_index, index] = maybe_lookup_success;
    if (index === -1) {
      return {
        ok: false,
        error: new CompilerError(ctx.start.line, "Unknown variable"),
      };
    }

    const parent_index = current_env_index - env_index;
    return {
      ok: true,
      value: {
        max_stack_size: 1,
        instructions: [
          parent_index === 0
            ? { opcode: OpCodes.LDLG, operands: [index] }
            : {
                opcode: OpCodes.LDPG,
                operands: [index, parent_index],
              },
        ],
      },
    };
  }

  visitExpression(ctx: ExpressionContext): InstructionCompilerOutput {
    this.print_fn("Visiting expression");

    // Case 1: literal
    const literal_ctx = ctx.literal();
    if (literal_ctx !== undefined) {
      return this.visitLiteral(literal_ctx);
    }

    // Case 2: Name
    const name_ctx = ctx.name();
    if (name_ctx !== undefined) {
      return this.visitName(name_ctx);
    }

    // Case 3: block
    const block_ctx = ctx.block();
    if (block_ctx !== undefined) {
      const block_results = this.visitBlock(block_ctx);
      if (!block_results.ok) {
        return block_results;
      }

      return block_results;
    }

    // Case 4: Expression binary_operator Expression
    const binary_operator_ctx = ctx.binary_operator();
    if (binary_operator_ctx !== undefined) {
      const left_instrs = this.visit(ctx.expression(0));
      const right_instrs = this.visit(ctx.expression(1));
      return compile_binary_expression(
        binary_operator_ctx,
        left_instrs,
        right_instrs,
      );
    }

    // Case 5: Expression binary_logical_operator Expression
    const binary_logical_operator_ctx = ctx.binary_logical_operator();
    if (binary_logical_operator_ctx !== undefined) {
      const left_instrs = this.visit(ctx.expression(0));
      const right_instrs = this.visit(ctx.expression(1));
      if (binary_logical_operator_ctx.text === "&&") {
        return compile_conditional(
          left_instrs,
          right_instrs,
          left_instrs, // If left_instrs is false, then the result is false
        );
      } else if (binary_logical_operator_ctx.text === "||") {
        return compile_conditional(
          left_instrs,
          left_instrs, // If left_instrs is true, then the result is true
          right_instrs,
        );
      }

      return {
        ok: false,
        error: new CompilerError(
          ctx.start.line,
          `Unknown binary_logical_operator: ${binary_logical_operator_ctx.text}. This should not happen.`,
        ),
      };
    }

    // Case 6: unary_operator Expression
    const unary_operator_ctx = ctx.unary_operator();
    if (unary_operator_ctx !== undefined) {
      const instrs = this.visit(ctx.expression(0));
      if (!instrs.ok) {
        return instrs;
      }

      const opcode = VALID_UNARY_OPERATORS.get(unary_operator_ctx.text)!;
      const instructions = instrs.value.instructions.concat([
        { opcode, operands: [] },
      ]);
      return {
        ok: true,
        value: {
          max_stack_size: instrs.value.max_stack_size,
          instructions,
        },
      };
    }

    // Case 7: function_application
    const function_application_ctx = ctx.function_application();
    if (function_application_ctx !== undefined) {
      return this.visitFunction_application(function_application_ctx);
    }

    // Case 8: (expression)
    const parenthesized_expression = ctx.parens_expression();
    if (parenthesized_expression !== undefined) {
      return this.visitExpression(parenthesized_expression.expression());
    }

    // Case 9: if_expression
    const if_expression_ctx = ctx.if_expression();
    if (if_expression_ctx !== undefined) {
      return this.visitIf_expression(if_expression_ctx);
    }

    return {
      ok: false,
      error: new CompilerError(
        ctx.start.line,
        "Not implemented: Unknown Case Expression",
      ),
    };
  }

  visitFunction_declaration(
    ctx: Function_declarationContext,
  ): InstructionCompilerOutput {
    this.print_fn("Visiting function_declaration");
    return {
      ok: false,
      error: new CompilerError(
        ctx.start.line,
        "InstructionCompiler can only run on blocks and below!. Received Function_declaration instead.",
      ),
    };
  }

  visitReturn_expression(
    ctx: Return_expressionContext,
  ): InstructionCompilerOutput {
    this.print_fn("Visiting return_expression");

    const results = this.visitExpression(ctx.expression());
    if (!results.ok) {
      return results;
    }
    results.value.instructions.push({ opcode: OpCodes.RETG, operands: [] });
    return results;
  }

  visitIf_expression(ctx: If_expressionContext): InstructionCompilerOutput {
    this.print_fn("Visiting if_expression");
    const noop: InstructionCompilerOutput = {
      ok: true,
      value: {
        max_stack_size: 0,
        instructions: [
          {
            opcode: OpCodes.NOP,
            operands: [],
          },
        ],
      },
    };

    return compile_conditional(
      this.visit(ctx.cond_expr()),
      this.visit(ctx.block(0)),
      ctx.block(1) !== undefined ? this.visit(ctx.block(1)) : noop,
    );
  }

  visitCond_expr(ctx: Cond_exprContext): InstructionCompilerOutput {
    this.print_fn("Visiting cond_expr");
    return this.visit(ctx.expression());
  }

  visitFunction_application(
    ctx: Function_applicationContext,
  ): InstructionCompilerOutput {
    this.print_fn("Visiting function_application");

    const function_name = ctx.function_name().text;

    // TODO: This allows variable names to shadow function names!
    const maybe_lookup_success = name_recursive_lookup(
      this.environments,
      function_name,
    );

    if (maybe_lookup_success === undefined) {
      return {
        ok: false,
        error: new CompilerError(
          ctx.start.line,
          `Function ${function_name} not found in environment. This is a Validator error.`,
        ),
      };
    }

    const instructions = [];

    // Load the function to the stack
    const [env_index, index] = maybe_lookup_success;
    const parent_index = this.environments.length - 1 - env_index;

    instructions.push(
      parent_index === 0
        ? { opcode: OpCodes.LDLG, operands: [index] }
        : {
            opcode: OpCodes.LDPG,
            operands: [index, parent_index],
          },
    );

    // Load the arguments to the stack
    let max_stack_size = 0;
    const arguments_list = ctx.args_list().args()?.expression() || [];
    for (const argument of arguments_list) {
      const maybe_compiled_argument = this.visitExpression(argument);
      if (!maybe_compiled_argument.ok) {
        return maybe_compiled_argument;
      }
      max_stack_size = Math.max(
        max_stack_size,
        maybe_compiled_argument.value.max_stack_size,
      );

      instructions.push(...maybe_compiled_argument.value.instructions);
    }

    // Call the function
    instructions.push({
      opcode: OpCodes.CALL,
      operands: [arguments_list.length],
    });
    return {
      ok: true,
      value: {
        max_stack_size: arguments_list.length + max_stack_size,
        instructions,
      },
    };
  }

  visitBlock(ctx: BlockContext): InstructionCompilerOutput {
    // Block := statement* expression?
    this.print_fn("Visiting block");

    const instructions: Instructions = [];

    // Count number of declarations
    const num_declarations = ctx
      .statement()
      .filter(
        (x) =>
          x.constant_declaration() !== undefined ||
          x.variable_declaration() !== undefined,
      ).length;

    // Create a new environment
    if (num_declarations > 0) {
      this.environments.push(new Environment());
      instructions.push({
        opcode: OpCodes.NEWENV,
        operands: [num_declarations],
      });
    }

    // Compile the statements
    const statements = ctx.statement();
    let max_stack_size = 0;
    for (const statement of statements) {
      const maybe_compiled_statement = this.visit(statement);
      if (!maybe_compiled_statement.ok) {
        return maybe_compiled_statement;
      }
      max_stack_size = Math.max(
        max_stack_size,
        maybe_compiled_statement.value.max_stack_size,
      );

      instructions.push(...maybe_compiled_statement.value.instructions);
    }

    // Compile the expression, if it exists
    const maybe_expression = ctx.expression();
    if (maybe_expression !== undefined) {
      const maybe_compiled_expression = this.visit(maybe_expression);
      if (!maybe_compiled_expression.ok) {
        return maybe_compiled_expression;
      }

      max_stack_size = Math.max(
        max_stack_size,
        maybe_compiled_expression.value.max_stack_size,
      );

      instructions.push(...maybe_compiled_expression.value.instructions);
    } else {
      // Value of a block with no expression is `undefined`
      instructions.push({ opcode: OpCodes.LGCU, operands: [] });
    }

    // Pop the environment
    if (num_declarations > 0) {
      instructions.push({ opcode: OpCodes.POPENV, operands: [] });
      this.environments.pop();
    }

    return {
      ok: true,
      value: {
        max_stack_size,
        instructions,
      },
    };
  }

  visitFunction_body(ctx: Function_bodyContext): InstructionCompilerOutput {
    this.print_fn("Visiting function_body");
    const results = this.visitBlock(ctx.block());
    if (!results.ok) {
      return results;
    }

    // Block is a value expression. An implicit return is added
    results.value.instructions.push({ opcode: OpCodes.RETG, operands: [] });
    return results;
  }

  visitStatement(ctx: StatementContext): InstructionCompilerOutput {
    this.print_fn("Visiting statement");

    // Case 1: Constant declaration
    const maybe_constant_declaration = ctx.constant_declaration();
    if (maybe_constant_declaration !== undefined) {
      return add_pop_result_instr(
        this.visitConstant_declaration(maybe_constant_declaration),
      );
    }

    // Case 2: Variable declaration
    const maybe_variable_declaration = ctx.variable_declaration();
    if (maybe_variable_declaration !== undefined) {
      return add_pop_result_instr(
        this.visitVariable_declaration(maybe_variable_declaration),
      );
    }

    // Case 3: Return expression
    const maybe_return_expression = ctx.return_expression();
    if (maybe_return_expression !== undefined) {
      // No need to add a POP instruction for return statements
      return this.visitReturn_expression(maybe_return_expression);
    }

    // Case 4: Expression
    const maybe_expression = ctx.expression();
    if (maybe_expression !== undefined) {
      return add_pop_result_instr(this.visitExpression(maybe_expression));
    }

    return {
      ok: false,
      error: new CompilerError(
        ctx.start.line,
        "Unknown statement. This should not happen.",
      ),
    };
  }
}

export class Rust1Compiler
  extends AbstractParseTreeVisitor<CompilerOutput>
  implements Compiler
{
  language_version: string = "Rust1";

  private instruction_compiler: Rust1InstructionCompiler;
  private compile_time_evaluator: Rust1CompileTimeEvaluator;

  private constant_env: CompileTimeContext = new CompileTimeContext();
  private function_env: Environment = new Environment();
  private functions: SVMFunction[] = [];

  constructor(private debug_mode: boolean) {
    super();
    this.instruction_compiler = new Rust1InstructionCompiler(
      this.constant_env,
      debug_mode,
    );
    this.compile_time_evaluator = new Rust1CompileTimeEvaluator();
  }

  defaultResult(): CompilerOutput {
    return {
      ok: true,
      value: {
        entry_point: undefined,
        functions: [],
      },
    };
  }

  aggregateResult(
    aggregate: CompilerOutput,
    nextResult: CompilerOutput,
  ): CompilerOutput {
    // TODO: Check if the aggregation step is working as expected
    if (!aggregate.ok) {
      return aggregate;
    }

    if (!nextResult.ok) {
      return nextResult;
    }

    return {
      ok: true,
      value: {
        entry_point:
          aggregate.value.entry_point === undefined
            ? aggregate.value.entry_point
            : nextResult.value.entry_point,
        functions: aggregate.value.functions.concat(nextResult.value.functions),
      },
    };
  }

  visitProgram(ctx: ProgramContext): CompilerOutput {
    // Hoist all constant declarations
    const const_decls = ctx
      .program_element()
      .map((x) => x.constant_declaration())
      .filter((x) => x !== undefined);

    for (const const_decl of const_decls) {
      const decl_name = const_decl.const_name().text;
      const decl_type = const_decl.type().text;

      // Cannot redeclare a constant
      if (this.constant_env.lookup(decl_name) !== undefined) {
        return {
          ok: false,
          error: new CompilerError(
            const_decl.start.line,
            "Cannot redeclare a constant. This is a Validator error.",
          ),
        };
      }

      const eval_value = this.compile_time_evaluator.visitExpression(
        const_decl.expression(),
      );
      if (!eval_value.ok) {
        return {
          ok: false,
          error: eval_value.error,
        };
      }
      this.constant_env.push(decl_name, decl_type, eval_value.value);
    }

    // Hoist all function declarations
    const function_decls = ctx
      .program_element()
      .map((x) => x.function_declaration())
      .filter((x) => x !== undefined);

    const initial_instructions: Instructions = [];
    for (const func_decl of function_decls) {
      const function_name = func_decl.function_name().text;
      const type = func_decl.type().text;

      const parameter_list = func_decl.parameter_list();
      const num_args = parameter_list.parameters()?.parameter().length || 0;

      // Add to the environment
      const function_addr = this.function_env.push(function_name, type);
      this.functions.push({
        stack_size: NaN,
        environment_size: num_args,
        num_args: num_args,
        instructions: [],
      });

      if (function_name !== "main") {
        // No need to create a closure for the entry point
        initial_instructions.push({
          opcode: OpCodes.NEWC,
          operands: [function_addr],
        }); // Create a new closure

        initial_instructions.push({
          opcode: OpCodes.STLG,
          operands: [function_addr],
        }); // Store the closure in the environment
      }
    }

    // Look for entry point
    const maybe_entry_point = this.function_env.lookup("main");
    if (maybe_entry_point === undefined) {
      return {
        ok: false,
        error: new CompilerError(
          ctx.start.line,
          "No entry point found. This is a Validator error",
        ),
      };
    }

    // Compile each function separately
    for (
      let function_addr = 0;
      function_addr < function_decls.length;
      function_addr++
    ) {
      const func_decl = function_decls[function_addr];
      const func_body = func_decl.function_body();
      const func_parameters =
        func_decl.parameter_list().parameters()?.parameter() || [];
      const parameter_env = new Environment();

      // Add parameters to the parameter environment
      for (let i = 0; i < func_parameters.length; i++) {
        const param_name = func_parameters[i].IDENTIFIER().text;
        const param_type = func_parameters[i].type().text;
        parameter_env.push(param_name, param_type);
      }

      // Compile the function body
      this.instruction_compiler.setEnvironments(
        parameter_env.get_size() === 0
          ? [this.function_env]
          : [this.function_env, parameter_env],
      );
      const maybe_compiled_function =
        this.instruction_compiler.visitFunction_body(func_body);
      if (!maybe_compiled_function.ok) {
        return {
          ok: false,
          error: maybe_compiled_function.error,
        };
      }

      // Count number of declarations
      const num_declarations = func_body
        .block()
        .statement()
        .filter(
          (x) =>
            x.constant_declaration() !== undefined ||
            x.variable_declaration() !== undefined,
        ).length;

      const function_instructions = maybe_compiled_function.value;

      const function_obj = this.functions[function_addr];

      if (function_addr === maybe_entry_point) {
        function_obj.environment_size =
          function_obj.num_args + num_declarations + function_decls.length - 1;
        function_obj.stack_size = function_instructions.max_stack_size;
        function_obj.instructions = initial_instructions.concat(
          function_instructions.instructions,
        );
      } else {
        function_obj.environment_size =
          function_obj.num_args + num_declarations;
        function_obj.stack_size = function_instructions.max_stack_size;
        function_obj.instructions = function_instructions.instructions;
      }
    }

    // Print values
    if (this.debug_mode) {
      console.log("Compile-time values:");
      for (let i = 0; i < this.constant_env.num_variables(); i++) {
        console.log(
          `  ${this.constant_env.get_name(i)}: ${this.constant_env.get_value(i)}`,
        );
      }

      console.log("Functions:");
      for (let i = 0; i < this.function_env.get_size(); i++) {
        console.log(
          `\t${this.function_env.get_name(i)}: ${this.function_env.get_type(i)}`,
        );
        console.log("Stack size: ", this.functions[i].stack_size);
        console.log("Environment size: ", this.functions[i].environment_size);
        console.log("Num args: ", this.functions[i].num_args);
        console.log("Instructions: ");
        for (const instr of this.functions[i].instructions) {
          console.log("\t", OpCodes[instr.opcode], instr.operands);
        }
      }
    }

    return {
      ok: true,
      value: {
        entry_point: maybe_entry_point,
        functions: this.functions,
      },
    };
  }
}
