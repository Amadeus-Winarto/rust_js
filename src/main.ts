import { createInterface } from 'readline';
import { existsSync, readFileSync } from 'fs';

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { Rust1Lexer as RustLexer } from './grammars/Rust1Lexer';
import { Rust1Parser as RustParser } from './grammars/Rust1Parser';
import { Validator } from './validators/types';

import { SyntaxValidator } from './validators/syntax';
import { DeclarationValidator } from './validators/declaration';
import { TypeSystemValidator } from './validators/type_system';

import { Rust1Compiler } from './compilers/rust1_compiler';

const DEBUG_MODE = false;

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
    await new Promise(resolve => setTimeout(resolve, 100));
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
  const program_string = function () {
    if (!is_file(input_string)) {
      console.log("Interpreting input as program string!");
      return input_string;
    }
    else {
      return readFileSync(input_string, 'utf8');

    }
  }();

  console.log("Program:\n ", program_string);

  // Create the lexer and parser
  const inputStream = CharStreams.fromString(program_string);
  const lexer = new RustLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new RustParser(tokenStream);

  // Parse the input (this is the entry point for the grammar)
  const tree = parser.program();

  // Build the list of validators
  const validators: Validator[] = [
    new SyntaxValidator(DEBUG_MODE),
    new DeclarationValidator(DEBUG_MODE),
    new TypeSystemValidator(DEBUG_MODE)
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

  // Compile the program
  const compiler = new Rust1Compiler(DEBUG_MODE);
  const result = compiler.visit(tree);
  if (!result.ok) {
    console.error("Compilation failed: ", result.error);
    process.exit(1);
  }
  console.log("Compilation passed!");
  console.log("Instructions: ", result.value);
  process.exit(0);
}

main(); 