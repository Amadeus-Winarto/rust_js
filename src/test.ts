import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { Rust1Lexer as RustLexer } from './grammars/Rust1Lexer';
import { Rust1Parser as RustParser, Variable_declarationContext } from './grammars/Rust1Parser';
import { Rust1Visitor as RustVisitor } from './grammars/Rust1Visitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

const program_string = `
let x : i32 = 5;
let y : i32 = 10;
`

// Create the lexer and parser
let inputStream = CharStreams.fromString(program_string);
let lexer = new RustLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new RustParser(tokenStream);

// Parse the input (this is the entry point for the grammar)
const tree = parser.program();

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class CountVariablesVisitor extends AbstractParseTreeVisitor<number> implements RustVisitor<number> {

  defaultResult() {
    return 0
  }

  aggregateResult(aggregate: number, nextResult: number) {
    return aggregate + nextResult
  }

  visitVariable_declaration?: (ctx: Variable_declarationContext) => number = (context) => {
    return 1 + super.visitChildren(context)
  }
}

// Create the visitor
const countVariablesVisitor = new CountVariablesVisitor()
// Use the visitor entry point
const result = countVariablesVisitor.visit(tree)

console.log("Program: ", program_string);
console.log("Number of variables: ", result); // "Number of variables: 1"