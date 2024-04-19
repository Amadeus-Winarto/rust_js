import { Validator } from "./types";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { print, Result } from "../utils";
import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";
import {
  BlockContext,
  ClosureContext,
  Constant_declarationContext,
  Derefed_nameContext,
  ExpressionContext,
  Function_applicationContext,
  Immutable_refed_nameContext,
  Mutable_refed_nameContext,
  ProgramContext,
  Refed_nameContext,
  Variable_declarationContext,
} from "../grammars/Rust2Parser";
import { PreBuiltFunctions } from "../preamble/preamble";

class BorrowCheckerError extends Error {
  constructor(message: string, line_number: number) {
    super(`Line ${line_number}: ${message}`);
    this.name = this.constructor.name;
  }
}

type BorrowInfo = {
  immutable_borrow: number;
  any_mutable_borrow: boolean;
};

type BorrowType = "immutable" | "mutable";
type LenderInfo = {
  lender_name: string;
  type: BorrowType;
};

type LenderScope = Map<string, BorrowInfo>;
type BorrowerScope = Map<string, LenderInfo>;
type MovedScope = string[];
type CaptureInfo = string[];
type CaptureScope = Map<string, CaptureInfo>;

function get_underlying_name_deref(
  derefed_name_ctx: Derefed_nameContext,
): string {
  const maybe_name = derefed_name_ctx.name();
  if (maybe_name !== undefined) {
    return maybe_name.text;
  }

  const maybe_derefed_name = derefed_name_ctx.derefed_name();
  if (maybe_derefed_name !== undefined) {
    return get_underlying_name_deref(maybe_derefed_name);
  }
  return "Impossible";
}

function get_underlying_name_ref(refed_name_ctx: Refed_nameContext): string {
  const maybe_immutable = refed_name_ctx.immutable_refed_name();
  const maybe_mutable = refed_name_ctx.mutable_refed_name();

  if (maybe_immutable === undefined && maybe_mutable === undefined) {
    return "Impossible";
  }

  if (maybe_immutable !== undefined) {
    const maybe_name = maybe_immutable.name();
    if (maybe_name !== undefined) {
      return maybe_name.text;
    }

    const maybe_refed_name = maybe_immutable.refed_name();
    if (maybe_refed_name !== undefined) {
      return get_underlying_name_ref(maybe_refed_name);
    }
    return "Impossible";
  }

  if (maybe_mutable !== undefined) {
    const maybe_name = maybe_mutable.name();
    if (maybe_name !== undefined) {
      return maybe_name.text;
    }

    const maybe_refed_name = maybe_mutable.refed_name();
    if (maybe_refed_name !== undefined) {
      return get_underlying_name_ref(maybe_refed_name);
    }
    return "Impossible";
  }

  return "Impossible";
}

function recursive_lookup<T>(
  scopes: Map<string, T>[],
  name: string,
): [number, T] | undefined {
  for (let i = scopes.length - 1; i >= 0; i--) {
    const value = scopes[i].get(name);
    if (value !== undefined) {
      return [i, value];
    }
  }
  return undefined;
}

function recursive_array_lookup<T>(
  scopes: T[][],
  condition: (value: T) => boolean,
): [number, T] | undefined {
  for (let i = scopes.length - 1; i >= 0; i--) {
    const value = scopes[i].find(condition);
    if (value !== undefined) {
      return [i, value];
    }
  }
  return undefined;
}

function restore_scopes(
  borrower_scopes: BorrowerScope[],
  lender_scopes: LenderScope[],
  moved_scopes: MovedScope[],
  capture_info_scopes: CaptureScope[],
): boolean {
  const last_borrow_scope = borrower_scopes.pop();

  if (last_borrow_scope !== undefined) {
    const lender_infos = Array.from(last_borrow_scope.entries()).map(
      ([_, value]) => value,
    );
    for (const lender_info of lender_infos) {
      const maybe_lender_info = recursive_lookup(
        lender_scopes,
        lender_info.lender_name,
      );
      if (maybe_lender_info === undefined) {
        return false;
      }

      const [scope_index, borrow_info] = maybe_lender_info;
      if (lender_info.type === "immutable") {
        lender_scopes[scope_index].set(lender_info.lender_name, {
          immutable_borrow: borrow_info.immutable_borrow - 1,
          any_mutable_borrow: borrow_info.any_mutable_borrow,
        });
      } else if (lender_info.type === "mutable") {
        lender_scopes[scope_index].set(lender_info.lender_name, {
          immutable_borrow: borrow_info.immutable_borrow,
          any_mutable_borrow: false,
        });
      }
    }
  }

  lender_scopes.pop();
  moved_scopes.pop();
  capture_info_scopes.pop();
  return true;
}

function find_captured_names(
  ctx: BlockContext,
  curr_env: string[][],
): string[] {
  const statements = ctx.statement();
  const captured_list: string[] = [];

  for (const stmt of statements) {
    const maybe_variable_declaration = stmt.variable_declaration();
    if (maybe_variable_declaration !== undefined) {
      const expr_captured_list = handle_captured_names_in_expression(
        maybe_variable_declaration.expression(),
        curr_env,
      );
      captured_list.push(...expr_captured_list);

      const var_name = maybe_variable_declaration.var_name().text;
      curr_env[curr_env.length - 1].push(var_name);
      continue;
    }

    const maybe_constant_declaration = stmt.constant_declaration();
    if (maybe_constant_declaration !== undefined) {
      const expr_captured_list = handle_captured_names_in_expression(
        maybe_constant_declaration.expression(),
        curr_env,
      );
      captured_list.push(...expr_captured_list);

      const const_name = maybe_constant_declaration.const_name().text;
      curr_env[curr_env.length - 1].push(const_name);
      continue;
    }

    const maybe_expression = stmt.expression();
    if (maybe_expression !== undefined) {
      const expr_captured_list = handle_captured_names_in_expression(
        maybe_expression,
        curr_env,
      );
      captured_list.push(...expr_captured_list);
    }
  }
  return captured_list;
}

function handle_captured_names_in_expression(
  expression: ExpressionContext,
  curr_env: string[][],
): string[] {
  const captured_list: string[] = [];

  // Case 1: name
  const maybe_name = expression.name();
  if (maybe_name !== undefined) {
    const name = maybe_name.text;
    if (
      recursive_array_lookup(curr_env, (env) => env.includes(name)) ===
      undefined
    ) {
      // Found captured name
      captured_list.push(name);
      return captured_list;
    }
  }

  // Case 2: refed_name
  const maybe_refed_name = expression.refed_name();
  if (maybe_refed_name !== undefined) {
    const refed_name = get_underlying_name_ref(maybe_refed_name);
    if (
      recursive_array_lookup(curr_env, (env) => env.includes(refed_name)) ===
      undefined
    ) {
      // Found captured name
      captured_list.push(refed_name);
      return captured_list;
    }
  }

  // Case 3: derefed_name
  const maybe_derefed_name = expression.derefed_name();
  if (maybe_derefed_name !== undefined) {
    const derefed_name = get_underlying_name_deref(maybe_derefed_name);
    if (
      recursive_array_lookup(curr_env, (env) => env.includes(derefed_name)) ===
      undefined
    ) {
      // Found captured name
      captured_list.push(derefed_name);
      return captured_list;
    }
  }

  const maybe_block = expression.block();
  if (maybe_block !== undefined) {
    // New block => new scope
    curr_env.push([]);
    const block_captured_list = find_captured_names(maybe_block, curr_env);
    curr_env.pop();
    captured_list.push(...block_captured_list);
    return captured_list;
  }

  const maybe_closure = expression.closure();
  if (maybe_closure !== undefined) {
    // New closure => new scope
    curr_env.push([]);
    const closure_captured_list = find_captured_names(
      maybe_closure.function_body().block(),
      curr_env,
    );
    curr_env.pop();
    captured_list.push(...closure_captured_list);
    return captured_list;
  }

  return captured_list;
}

class BorrowChecker
  extends AbstractParseTreeVisitor<Result<boolean>>
  implements RustVisitor<Result<boolean>>
{
  private lender_scopes: LenderScope[] = [new Map()];
  private borrower_scopes: BorrowerScope[] = [new Map()];
  private moved_scopes: MovedScope[] = [];
  private lender_info: LenderInfo | undefined;

  private capture_info: CaptureInfo | undefined;
  private capture_scopes: CaptureScope[] = [];

  defaultResult(): Result<boolean> {
    return {
      ok: true,
      value: true,
    };
  }

  aggregateResult(
    aggregate: Result<boolean>,
    nextResult: Result<boolean>,
  ): Result<boolean> {
    if (!aggregate.ok) {
      return aggregate;
    } else if (!nextResult.ok) {
      return nextResult;
    }

    return {
      ok: true,
      value: aggregate.value && nextResult.value,
    };
  }

  visitClosure(ctx: ClosureContext): Result<boolean> {
    // First, make sure borrowing rules are followed in the body
    const result = this.visit(ctx.function_body());
    if (!result.ok) {
      return result;
    }

    // Lookup all names that are captured and save it
    const curr_env: string[][] = [[]];
    const captured_names = find_captured_names(
      ctx.function_body().block(),
      curr_env,
    );
    this.capture_info = captured_names;

    return {
      ok: true,
      value: true,
    };
  }

  visitBlock(ctx: BlockContext): Result<boolean> {
    this.lender_scopes.push(new Map());
    this.borrower_scopes.push(new Map());
    this.moved_scopes.push([]);
    this.capture_scopes.push(new Map());

    const result = this.visitChildren(ctx);
    if (!result.ok) {
      return result;
    }

    const restoration_result = restore_scopes(
      this.borrower_scopes,
      this.lender_scopes,
      this.moved_scopes,
      this.capture_scopes,
    );
    if (!restoration_result) {
      return {
        ok: false,
        error: new BorrowCheckerError(
          `Failed to restore scopes. This is likely a BorrowChecker bug.`,
          ctx.start.line,
        ),
      };
    }

    return {
      ok: true,
      value: true,
    };
  }

  visitVariable_declaration(ctx: Variable_declarationContext): Result<boolean> {
    // Look at RHS expression first
    const rhs_result = this.visit(ctx.expression());
    if (!rhs_result.ok) {
      return rhs_result;
    }

    const name = ctx.var_name().text;
    const current_lender_scope =
      this.lender_scopes[this.lender_scopes.length - 1];
    const current_borrower_scope =
      this.borrower_scopes[this.borrower_scopes.length - 1];

    // Check if variable is associated with a captured name
    if (this.capture_info !== undefined) {
      // Associate this variable with the captured names
      this.capture_scopes[this.capture_scopes.length - 1].set(
        ctx.var_name().text,
        this.capture_info,
      );
      this.capture_info = undefined;
    }

    // Variable is declared -> can become a lender
    current_lender_scope.set(name, {
      immutable_borrow: 0,
      any_mutable_borrow: false,
    });

    if (this.lender_info !== undefined) {
      // Current variable is borrowing from another variable!
      current_borrower_scope.set(name, this.lender_info);
      this.lender_info = undefined;
    }

    return {
      ok: true,
      value: true,
    };
  }

  visitConstant_declaration(ctx: Constant_declarationContext): Result<boolean> {
    // Look at RHS expression first
    const rhs_result = this.visit(ctx.expression());
    if (!rhs_result.ok) {
      return rhs_result;
    }

    const name = ctx.const_name().text;
    const current_lender_scope =
      this.lender_scopes[this.lender_scopes.length - 1];
    const current_borrower_scope =
      this.borrower_scopes[this.borrower_scopes.length - 1];

    // Check if variable is associated with a captured name
    if (this.capture_info !== undefined) {
      // Associate this variable with the captured names
      this.capture_scopes[this.capture_scopes.length - 1].set(
        ctx.const_name().text,
        this.capture_info,
      );
      this.capture_info = undefined;
    }

    // Variable is declared -> can become a lender
    current_lender_scope.set(name, {
      immutable_borrow: 0,
      any_mutable_borrow: false,
    });

    if (this.lender_info !== undefined) {
      // Current variable is borrowing from another variable!
      current_borrower_scope.set(name, this.lender_info);
      this.lender_info = undefined;
    }

    return {
      ok: true,
      value: true,
    };
  }

  visitExpression(ctx: ExpressionContext): Result<boolean> {
    // Case 1: refed_name
    const refed_name = ctx.refed_name();
    if (refed_name) {
      return this.visitRefed_name(refed_name);
    }

    // Case 2: block
    const block = ctx.block();
    if (block) {
      return this.visitBlock(block);
    }

    // Case 3: function_application
    const function_application = ctx.function_application();
    if (function_application) {
      return this.visitFunction_application(function_application);
    }

    // Case 4: closures
    const closure = ctx.closure();
    if (closure) {
      return this.visitClosure(closure);
    }

    return {
      ok: true,
      value: true,
    };
  }

  visitImmutable_refed_name(ctx: Immutable_refed_nameContext): Result<boolean> {
    const maybe_name = ctx.name();
    const maybe_refed_name = ctx.refed_name();

    if (maybe_name === undefined && maybe_refed_name === undefined) {
      return {
        ok: false,
        error: new BorrowCheckerError(
          `refed_name has no name or refed_name. This is a Parser bug!`,
          ctx.start.line,
        ),
      };
    }

    if (maybe_name !== undefined) {
      const lender_name = maybe_name.text;

      // Check lender scope
      const maybe_borrow_info = recursive_lookup(
        this.lender_scopes,
        lender_name,
      );
      if (maybe_borrow_info === undefined) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `Variable ${lender_name} not found in lender scopes`,
            ctx.start.line,
          ),
        };
      }

      const [scope_index, borrow_info] = maybe_borrow_info;
      if (borrow_info.any_mutable_borrow) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `Cannot borrow ${lender_name} as mutable`,
            ctx.start.line,
          ),
        };
      }

      // Update borrow info
      this.lender_scopes[scope_index].set(lender_name, {
        immutable_borrow: borrow_info.immutable_borrow + 1,
        any_mutable_borrow: false,
      });

      // Set lender info
      this.lender_info = {
        lender_name,
        type: "immutable",
      };

      return {
        ok: true,
        value: true,
      };
    }

    if (maybe_refed_name !== undefined) {
      // E.g. &&x;
      const result = this.visitRefed_name(maybe_refed_name);
      if (!result.ok) {
        return result;
      }

      // Require lender info to be available
      if (this.lender_info === undefined) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `Cannot borrow borrowed variable. This is likely a BorrowChecker bug.`,
            ctx.start.line,
          ),
        };
      }

      this.lender_info.type = "immutable";
      this.lender_info.lender_name = "&" + this.lender_info.lender_name;
      return {
        ok: true,
        value: true,
      };
    }

    return {
      ok: false,
      error: new BorrowCheckerError(
        `Refed name not recognized. This is a Parser bug!`,
        ctx.start.line,
      ),
    };
  }

  visitMutable_refed_name(ctx: Mutable_refed_nameContext): Result<boolean> {
    const maybe_name = ctx.name();
    const maybe_refed_name = ctx.refed_name();

    if (maybe_name === undefined && maybe_refed_name === undefined) {
      return {
        ok: false,
        error: new BorrowCheckerError(
          `refed_name has no name or refed_name. This is a Parser bug!`,
          ctx.start.line,
        ),
      };
    }

    if (maybe_name !== undefined) {
      const lender_name = maybe_name.text;

      // Check lender scope
      const maybe_borrow_info = recursive_lookup(
        this.lender_scopes,
        lender_name,
      );
      if (maybe_borrow_info === undefined) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `Variable ${lender_name} not found in lender scopes`,
            ctx.start.line,
          ),
        };
      }

      const [scope_index, borrow_info] = maybe_borrow_info;
      if (borrow_info.any_mutable_borrow) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `Cannot borrow ${lender_name} as mutable again`,
            ctx.start.line,
          ),
        };
      }

      if (borrow_info.immutable_borrow > 0) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `Cannot borrow ${lender_name} as mutable because it is also borrowed as immutable`,
            ctx.start.line,
          ),
        };
      }

      // Update borrow info
      this.lender_scopes[scope_index].set(lender_name, {
        immutable_borrow: borrow_info.immutable_borrow,
        any_mutable_borrow: true,
      });

      // Set lender info
      this.lender_info = {
        lender_name,
        type: "mutable",
      };

      return {
        ok: true,
        value: true,
      };
    }

    if (maybe_refed_name !== undefined) {
      // E.g. &&x;
      const result = this.visitRefed_name(maybe_refed_name);
      if (!result.ok) {
        return result;
      }

      // Require lender info to be available
      if (this.lender_info === undefined) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `Cannot borrow borrowed variable. This is likely a BorrowChecker bug.`,
            ctx.start.line,
          ),
        };
      }

      this.lender_info.type = "mutable";
      this.lender_info.lender_name = "&mut" + this.lender_info.lender_name;
      return {
        ok: true,
        value: true,
      };
    }

    return {
      ok: false,
      error: new BorrowCheckerError(
        `Refed name not recognized. This is a Parser bug!`,
        ctx.start.line,
      ),
    };
  }

  visitRefed_name(ctx: Refed_nameContext): Result<boolean> {
    const maybe_immutable_refed_name = ctx.immutable_refed_name();
    if (maybe_immutable_refed_name !== undefined) {
      return this.visitImmutable_refed_name(maybe_immutable_refed_name);
    }

    const maybe_mutable_refed_name = ctx.mutable_refed_name();
    if (maybe_mutable_refed_name !== undefined) {
      return this.visitMutable_refed_name(maybe_mutable_refed_name);
    }

    return {
      ok: false,
      error: new BorrowCheckerError(
        "Refed name not recognized. This is a Validator bug.",
        ctx.start.line,
      ),
    };
  }

  visitFunction_application(ctx: Function_applicationContext): Result<boolean> {
    const maybe_function_parameters = ctx.args_list().args();
    if (maybe_function_parameters === undefined) {
      return {
        ok: true,
        value: true,
      };
    }

    const function_parameter_exprs = maybe_function_parameters.expression();
    if (function_parameter_exprs.length === 0) {
      return {
        ok: true,
        value: true,
      };
    }

    const function_name = ctx.function_name().text;
    if (PreBuiltFunctions.has(function_name)) {
      return this.handle_prebuilt_function(ctx);
    }

    // Create scope for function parameters
    this.lender_scopes.push(new Map());
    this.borrower_scopes.push(new Map());
    this.moved_scopes.push([]);
    this.capture_scopes.push(new Map());

    // Evaluate function parameters
    for (const function_parameter_expr of function_parameter_exprs) {
      const result = this.visitExpression(function_parameter_expr);
      if (!result.ok) {
        return result;
      }
    }

    // Remove scope for function parameters
    const restoration_result = restore_scopes(
      this.borrower_scopes,
      this.lender_scopes,
      this.moved_scopes,
      this.capture_scopes,
    );
    if (!restoration_result) {
      return {
        ok: false,
        error: new BorrowCheckerError(
          `Failed to restore scopes. This is likely a BorrowChecker bug.`,
          ctx.start.line,
        ),
      };
    }

    return {
      ok: true,
      value: true,
    };
  }

  handle_prebuilt_function(ctx: Function_applicationContext): Result<boolean> {
    const function_name = ctx.function_name().text;

    if (function_name === "thread_spawn") {
      const arg_exprs = ctx.args_list().args()?.expression();
      if (arg_exprs === undefined || arg_exprs.length === 0) {
        return {
          ok: false,
          error: new BorrowCheckerError(
            `thread_spawn requires at least one argument. This is a Validator bug.`,
            ctx.start.line,
          ),
        };
      }

      // First argument must be a closure
      const first_arg = arg_exprs[0];
      const closure_ctx = first_arg.closure();
      if (closure_ctx !== undefined) {
        const result = this.visitClosure(closure_ctx);
        if (!result.ok) {
          return result;
        }

        // Check if closure is borrowing any variables
        const captured_names = this.capture_info;
        if (captured_names !== undefined && captured_names.length > 0) {
          return {
            ok: false,
            error: new BorrowCheckerError(
              `closure may outlive the current function, but it borrows ${captured_names} variables`,
              ctx.start.line,
            ),
          };
        }
        this.capture_info = undefined;
      }
    }
    return {
      ok: true,
      value: true,
    };
  }
}

export class BorrowCheckerValidator
  extends AbstractParseTreeVisitor<boolean>
  implements Validator
{
  rule_name: string = "Borrow Checker";
  private print_fn: (message?: any, ...optionalParams: any[]) => void;

  constructor(debug_mode: boolean) {
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
    this.print_fn("Calling Borrow Checker");
    const borrow_checker = new BorrowChecker();
    const results = borrow_checker.visit(ctx);

    if (!results.ok) {
      console.error(results.error);
      return false;
    }

    return true;
  }
}
