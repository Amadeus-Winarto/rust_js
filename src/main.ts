import { CharStreams, CommonTokenStream } from "antlr4ts";
import { Rust2Lexer as RustLexer } from "./grammars/Rust2Lexer";
import { Rust2Parser as RustParser } from "./grammars/Rust2Parser";

import { Validator } from "./validators/types";
import { SyntaxValidator } from "./validators/syntax";
import { EntrypointValidator } from "./validators/entrypoint";
import { DeclarationValidator } from "./validators/declaration";
import { TypeSystemValidator } from "./validators/type_system";

import { Rust2Compiler } from "./compilers/rust2_compiler";
import { OpCodes } from "./common/opcodes";
import { toProgramArray } from "./utils";
import { Instruction, Program } from "./compilers/compiler";
import { BorrowCheckerValidator } from "./validators/borrow_checker";

import { runWithProgram } from "./vm/vm";
const DEBUG_MODE = false;
const instruction_to_string = (instruction: Instruction) => {
  return `${OpCodes[instruction.opcode]} \t${instruction.operands.join("\t")}`;
};

const compiler_output = document.getElementById(
  "compiler_output",
) as HTMLInputElement;
const vm_output = document.getElementById("output") as HTMLInputElement;

function logToCompilerOutput(...message: any) {
  // Append the new message to the existing content
  compiler_output.value += message + "\n";
  // Scroll to the bottom to show the latest message
  // output.scrollTop = output.scrollHeight;
}

function clearCompilerOutput() {
  compiler_output.value = "";
}

function clearVMOutput() {
  vm_output.value = "";
}

let compiled_code: Program | undefined = undefined;

function compileCode() {
  const program_string = (document.getElementById("editor") as HTMLInputElement)
    .value;
  clearCompilerOutput();

  // Create the lexer and parser
  const inputStream = CharStreams.fromString(program_string);
  const lexer = new RustLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new RustParser(tokenStream);

  // Attach the error handler
  parser.removeErrorListeners();
  let parser_error = false;
  parser.addErrorListener({
    syntaxError: function (recognizer, offendingSymbol, line, column, msg, e) {
      logToCompilerOutput(
        `Syntax error at line ${line} column ${column} -> ${msg}`,
      );
      parser_error = true;
      return;
    },
  });

  // Parse the input (this is the entry point for the grammar)
  const tree = parser.program();
  if (parser_error) {
    logToCompilerOutput("Parsing failed! ");
    return;
  }

  // Build the list of validators
  const validators: Validator[] = [
    new SyntaxValidator(compiler_output, DEBUG_MODE),
    new EntrypointValidator(compiler_output, DEBUG_MODE),
    new DeclarationValidator(compiler_output, DEBUG_MODE),
    new TypeSystemValidator(compiler_output, DEBUG_MODE),
    new BorrowCheckerValidator(compiler_output, DEBUG_MODE),
  ];
  logToCompilerOutput("Validating...");
  for (const validator of validators) {
    const result = validator.visit(tree);
    logToCompilerOutput("\t" + validator.rule_name + ":" + result);
    if (!result) {
      logToCompilerOutput("Validation failed! ");
      return;
    }
  }
  logToCompilerOutput("Validation passed!");
  logToCompilerOutput("");

  // Compile the program
  const compiler = new Rust2Compiler(DEBUG_MODE);
  logToCompilerOutput("Compiling...");
  const result = compiler.visit(tree);
  if (!result.ok) {
    logToCompilerOutput(result.error);
    return;
  }
  logToCompilerOutput("Compilation passed!");
  compiled_code = result.value;
  let program = result.value;

  logToCompilerOutput("Entry function: ", program.entry_point);
  logToCompilerOutput("Functions: ");
  for (const func of program.functions) {
    logToCompilerOutput("\tStack size: " + func.stack_size);
    logToCompilerOutput("\tEnvironment size: " + func.environment_size);
    logToCompilerOutput("\tNum args: " + func.num_args);

    logToCompilerOutput("\tInstructions: ");
    let instr_idx = 0;
    for (const instr of func.instructions) {
      logToCompilerOutput(
        "\t\t" + instr_idx + " : " + instruction_to_string(instr),
      );
      instr_idx++;
    }
    logToCompilerOutput();
  }
  return;
}

document.getElementById("compileBtn")?.addEventListener("click", compileCode);

export function runCode() {
  // clear output window
  clearVMOutput();
  var heapSize = (document.getElementById("heapSize") as HTMLInputElement)
    .value as unknown as number;
  var numWorkers = (document.getElementById("workers") as HTMLInputElement)
    .value as unknown as number;
  // Call your runtime system function passing the compiled code
  if (compiled_code === undefined) {
    console.log("No compiled code found. Compiling...");
    compileCode();
  }

  if (compiled_code === undefined) {
    logToCompilerOutput("Compilation failed. ");
    return;
  } else {
    console.log("Code compiled successfully!");
  }

  runWithProgram(
    toProgramArray(compiled_code),
    heapSize,
    numWorkers,
    vm_output,
  );

  compiled_code = undefined;
}

document.getElementById("runBtn")?.addEventListener("click", runCode);

//main();

// Enable tabs in textarea
document.getElementById("editor")?.addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    e.preventDefault();
    var start = (this as HTMLInputElement).selectionStart;
    var end = (this as HTMLInputElement).selectionEnd;
    if (start === null || end === null) {
      return;
    }

    // set textarea value to: text before caret + tab + text after caret
    (this as HTMLInputElement).value =
      (this as HTMLInputElement).value.substring(0, start) +
      "\t" +
      (this as HTMLInputElement).value.substring(end); // Tab as 4 spaces

    // put caret at right position again
    (this as HTMLInputElement).selectionStart = (
      this as HTMLInputElement
    ).selectionEnd = start + 1;
  }
});
