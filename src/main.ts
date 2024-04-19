import { createInterface } from "readline";
import { existsSync, readFileSync } from "fs";

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
import { saveJson, toProgramArray } from "./utils";
import { Instruction, Program } from "./compilers/compiler";
import { BorrowCheckerValidator } from "./validators/borrow_checker";

import { runWithProgram } from './vm/vm'
const DEBUG_MODE = false;
const get_basename = (filename: string) => filename.split(/[\\/]/).pop();
const instruction_to_string = (instruction: Instruction) => {
  return `${OpCodes[instruction.opcode]} \t${instruction.operands.join("\t")}`;
};

const output = document.getElementById('output') as HTMLInputElement

export function logToOutput(...message: any) {
  // Append the new message to the existing content
  output.value += message + "\n";
  // Scroll to the bottom to show the latest message
  // output.scrollTop = output.scrollHeight;
}

function clearOutput() {
  output.value = ""
}

let compiled_code: Program

function compileCode() {
  const program_string = (document.getElementById('editor') as HTMLInputElement).value
  clearOutput()
  logToOutput("Program:")
  logToOutput(program_string)

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
      return
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
  logToOutput("Validating...")
  for (const validator of validators) {
    const result = validator.visit(tree);
    logToOutput("\t")
    logToOutput(validator.rule_name)
    logToOutput(":")
    logToOutput(result)
    if (!result) {
      logToOutput("Validation failed!")
      return
    }
  }
  logToOutput("Validation passed!");
  logToOutput("")

  // Compile the program
  const compiler = new Rust2Compiler(DEBUG_MODE);
  logToOutput("Compiling...")
  const result = compiler.visit(tree);
  if (!result.ok) {
    logToOutput(result.error)
    return
  }
  logToOutput("Compilation passed!");
  compiled_code = result.value
  let program = result.value

  console.log("Program: ");
  console.log("\tEntry function: ", program.entry_point);
  console.log("\tFunctions: ");
  for (const func of program.functions) {
    console.log("\t\tStack size: ", func.stack_size);
    console.log("\t\tEnvironment size: ", func.environment_size);
    console.log("\t\tNum args: ", func.num_args);

    console.log("\t\tInstructions: ");
    let instr_idx = 0;
    for (const instr of func.instructions) {
      console.log("\t\t\t", instr_idx, " : ", instruction_to_string(instr));
      instr_idx++;
    }
    console.log();
  }
  return
}

document.getElementById('compileBtn')?.addEventListener('click', compileCode)

export function runCode() {
  // clear output window
  (document.getElementById('output') as HTMLInputElement).value = ""
  var heapSize = (document.getElementById('heapSize') as HTMLInputElement).value as unknown as number
  var numWorkers = (document.getElementById('workers') as HTMLInputElement).value as unknown as number
  // Call your runtime system function passing the compiled code
  var result = runWithProgram(toProgramArray(compiled_code), heapSize, numWorkers, output);
}

document.getElementById('runBtn')?.addEventListener('click', runCode);

//main();

