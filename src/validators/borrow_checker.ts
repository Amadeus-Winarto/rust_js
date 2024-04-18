import { Validator } from "./types";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { print, Result } from "../utils";
import { Rust2Visitor as RustVisitor } from "../grammars/Rust2Visitor";
import {
  BlockContext,
  Constant_declarationContext,
  ExpressionContext,
  Immutable_refed_nameContext,
  Mutable_refed_nameContext,
  ProgramContext,
  Refed_nameContext,
  Variable_declarationContext,
} from "../grammars/Rust2Parser";

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

class BorrowChecker
  extends AbstractParseTreeVisitor<Result<boolean>>
  implements RustVisitor<Result<boolean>>
{
  private lender_scopes: LenderScope[] = [new Map()];
  private borrower_scopes: BorrowerScope[] = [new Map()];
  private lender_info: LenderInfo | undefined;

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

  visitBlock(ctx: BlockContext): Result<boolean> {
    this.lender_scopes.push(new Map());
    this.borrower_scopes.push(new Map());
    const result = this.visitChildren(ctx);
    const last_borrow_scope = this.borrower_scopes.pop();

    if (last_borrow_scope !== undefined) {
      const lender_infos = Array.from(last_borrow_scope.entries()).map(
        ([_, value]) => value,
      );
      for (const lender_info of lender_infos) {
        const maybe_lender_info = recursive_lookup(
          this.lender_scopes,
          lender_info.lender_name,
        );
        if (maybe_lender_info === undefined) {
          return {
            ok: false,
            error: new BorrowCheckerError(
              `Variable ${lender_info.lender_name} not found in lender scopes. This is likely a BorrowChecker bug.`,
              ctx.start.line,
            ),
          };
        }

        const [scope_index, borrow_info] = maybe_lender_info;
        if (lender_info.type === "immutable") {
          this.lender_scopes[scope_index].set(lender_info.lender_name, {
            immutable_borrow: borrow_info.immutable_borrow - 1,
            any_mutable_borrow: borrow_info.any_mutable_borrow,
          });
        } else if (lender_info.type === "mutable") {
          this.lender_scopes[scope_index].set(lender_info.lender_name, {
            immutable_borrow: borrow_info.immutable_borrow,
            any_mutable_borrow: false,
          });
        }
      }
    }

    this.lender_scopes.pop();
    return result;
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
