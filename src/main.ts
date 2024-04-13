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
import { saveJson } from "./utils";
import { Instruction } from "./compilers/compiler";

const DEBUG_MODE = false;
const get_basename = (filename: string) => filename.split(/[\\/]/).pop();
const instruction_to_string = (instruction: Instruction) => {
  return `${OpCodes[instruction.opcode]} \t${instruction.operands.join("\t")}`;
};

async function blocking_input() {
  if (process.env.npm_config_filename) {
    return process.env.npm_config_filename;
  }

  let input_string = undefined;
  let rl = createInterface(process.stdin, process.stdout);
  rl.question("Enter the filename: ", (input) => {
    input_string = input;
  });

  while (input_string === undefined) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return input_string;
}

function is_file(filename: string): boolean {
  // Check if file exists
  if (!existsSync(filename)) {
    console.error("ERROR: file ", filename, " does not exist");
    return false;
  }

  // Check if file is a .rs file
  return filename.endsWith(".rs");
}

// Main function
async function main() {
  const input_string = await blocking_input();
  let is_input_file = false;
  const program_string = (function () {
    if (!is_file(input_string)) {
      console.log("Interpreting input as program string!");
      return input_string;
    } else {
      is_input_file = true;
      return readFileSync(input_string, "utf8");
    }
  })();

  console.log("Program:\n ", program_string);

  // Create the lexer and parser
  const inputStream = CharStreams.fromString(program_string);
  const lexer = new RustLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new RustParser(tokenStream);

  // Attach the error handler
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError: function (recognizer, offendingSymbol, line, column, msg, e) {
      console.error(`Syntax error at line ${line} column ${column} -> ${msg}`);
      process.exit(1);
    },
  });

  // Parse the input (this is the entry point for the grammar)
  const tree = parser.program();

  // Build the list of validators
  const validators: Validator[] = [
    new SyntaxValidator(DEBUG_MODE),
    new EntrypointValidator(DEBUG_MODE),
    new DeclarationValidator(DEBUG_MODE),
    new TypeSystemValidator(true),
  ];
  console.log("Validating...");
  for (const validator of validators) {
    const result = validator.visit(tree);
    console.log("\t", validator.rule_name, ":", result);
    if (!result) {
      console.error("Validation failed!");
      process.exit(1);
    }
  }
  console.log("Validation passed!");
  console.log();

  // Compile the program
  const compiler = new Rust2Compiler(DEBUG_MODE);
  console.log("Compiling...");
  const result = compiler.visit(tree);
  if (!result.ok) {
    console.error(result.error);
    process.exit(1);
  }
  console.log("Compilation passed!");
  const program = result.value;

  saveJson(
    program,
    "output/" +
      (is_input_file ? get_basename(input_string) + ".json" : "output.json"),
  );

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
  process.exit(0);
}

main();
