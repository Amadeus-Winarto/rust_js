import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ProgramContext } from "../grammars/Rust2Parser";
import { Validator } from "./types";
import { print } from "../utils";

export class EntrypointValidator
  extends AbstractParseTreeVisitor<boolean>
  implements Validator
{
  rule_name: string = "Entrypoint";
  private print_fn: (message?: any, ...optionalParams: any[]) => void;

  constructor(
    private compiler_output: HTMLInputElement,
    debug_mode: boolean,
  ) {
    super();
    this.print_fn = print(debug_mode);
  }

  defaultResult() {
    return true;
  }

  aggregateResult(aggregate: boolean, nextResult: boolean): boolean {
    return aggregate && nextResult;
  }

  visitProgram(ctx: ProgramContext): boolean {
    this.print_fn("Visiting program");

    const function_declarations = ctx
      .program_element()
      .map((statement) => statement.function_declaration())
      .filter((function_declaration) => function_declaration !== undefined)
      .filter((function_ctx) => function_ctx!.function_name().text === "main");

    if (function_declarations.length === 0) {
      this.print_fn("No main function found");
      this.compiler_output.value =
        "SyntaxError: Rust programs require a main function!" + "\n";
      return false;
    }

    if (function_declarations.length > 1) {
      this.compiler_output.value =
        "SyntaxError: Rust programs can only have one main function. Found " +
        function_declarations.length +
        "\n";
      return false;
    }

    const main_function_ctx = function_declarations[0];
    const has_no_parameter =
      main_function_ctx!.parameter_list()?.parameters()?.parameter() ===
      undefined;
    if (!has_no_parameter) {
      this.compiler_output.value =
        "SyntaxError: main function should not have parameters" + "\n";
      return false;
    }

    const has_return_type = main_function_ctx!.type().text === "()";
    if (!has_return_type) {
      this.compiler_output.value =
        "SyntaxError: main function should have return type (). Got " +
        main_function_ctx!.type().text +
        " instead" +
        "\n";
      return false;
    }

    return true;
  }
}
