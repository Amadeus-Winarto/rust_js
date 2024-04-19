import { CharStreams, CommonTokenStream } from "antlr4ts";
import { Rust2Lexer as RustLexer } from "./grammars/Rust2Lexer";
import { Rust2Parser as RustParser } from "./grammars/Rust2Parser";

import { Validator } from "./validators/types";
import { SyntaxValidator } from "./validators/syntax";
import { EntrypointValidator } from "./validators/entrypoint";
import { DeclarationValidator } from "./validators/declaration";
import { TypeSystemValidator } from "./validators/type_system";

import { Rust2Compiler } from "./compilers/rust2_compiler";
import { OpCodes } from "./compilers/opcodes";
import { toProgramArray } from "./utils";
import { Instruction, Program } from "./compilers/compiler";
import { BorrowCheckerValidator } from "./validators/borrow_checker";

import { runWithProgram } from "./vm/vm";
const DEBUG_MODE = false;
const instruction_to_string = (instruction: Instruction) => {
  return `${OpCodes[instruction.opcode]} \t${instruction.operands.join("\t")}`;
};

const output = document.getElementById("output") as HTMLInputElement;

export function logToOutput(...message: any) {
  // Append the new message to the existing content
  output.value += message + "\n";
  // Scroll to the bottom to show the latest message
  // output.scrollTop = output.scrollHeight;
}

function clearOutput() {
  output.value = "";
}

let compiled_code: Program | undefined = undefined;

function compileCode() {
  const program_string = (document.getElementById("editor") as HTMLInputElement)
    .value;
  clearOutput();
  console.log("Program:");
  console.log(program_string);

  // Create the lexer and parser
  const inputStream = CharStreams.fromString(program_string);
  const lexer = new RustLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new RustParser(tokenStream);

  // Attach the error handler
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError: function (recognizer, offendingSymbol, line, column, msg, e) {
      logToOutput(`Syntax error at line ${line} column ${column} -> ${msg}`);
      return;
    },
  });

  // Parse the input (this is the entry point for the grammar)
  const tree = parser.program();

  // Build the list of validators
  const validators: Validator[] = [
    new SyntaxValidator(DEBUG_MODE),
    new EntrypointValidator(DEBUG_MODE),
    new DeclarationValidator(DEBUG_MODE),
    new TypeSystemValidator(DEBUG_MODE),
    new BorrowCheckerValidator(DEBUG_MODE),
  ];
  console.log("Validating...");
  for (const validator of validators) {
    const result = validator.visit(tree);
    console.log("\t");
    console.log(validator.rule_name + ":" + result);
    if (!result) {
      logToOutput("Validation failed! Open the console for more details.");
      return;
    }
  }
  console.log("Validation passed!");
  console.log("");

  // Compile the program
  const compiler = new Rust2Compiler(DEBUG_MODE);
  console.log("Compiling...");
  const result = compiler.visit(tree);
  if (!result.ok) {
    logToOutput(result.error + "Open the console for more details.");
    return;
  }
  console.log("Compilation passed!");
  compiled_code = result.value;
  let program = result.value;

  console.log("Entry function: ", program.entry_point);
  logToOutput("Functions: ");
  for (const func of program.functions) {
    logToOutput("\tStack size: " + func.stack_size);
    logToOutput("\tEnvironment size: " + func.environment_size);
    logToOutput("\tNum args: " + func.num_args);

    logToOutput("\tInstructions: ");
    let instr_idx = 0;
    for (const instr of func.instructions) {
      logToOutput("\t\t" + instr_idx + " : " + instruction_to_string(instr));
      instr_idx++;
    }
    logToOutput();
  }
  return;
}

document.getElementById("compileBtn")?.addEventListener("click", compileCode);

export function runCode() {
  // clear output window
  (document.getElementById("output") as HTMLInputElement).value = "";
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
    logToOutput("Compilation failed. Open the console for more details.");
    return;
  } else {
    console.log("Code compiled successfully!");
  }

  var result = runWithProgram(
    toProgramArray(compiled_code),
    heapSize,
    numWorkers,
    output,
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
