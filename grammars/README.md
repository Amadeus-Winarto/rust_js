# Grammar Specification

## Introduction

We define our levels of support for Rust grammar features in accordance to how Source defines their levels of support for JavaScript grammar features. The levels are as follows:

- Rust1: This is similar to Source1.
  - The following features are supported:
    - [x] Literal Values
    - [x] Constant Declarations
    - [x] Conditional Statements and Conditional Expressions
    - [x] Function Declarations and Function Definitions
    - [x] Block Statements
    - [x] Boolean operators
    - [x] Sequences
  - The following features in Source1 are not supported:
    - Imports / includes
    - Character literals; hard to distinguish from string literals
    - Excluding reserved words in certain contexts e.g. variable declarations


### Verifying the grammar

To verify the grammar on a given Rust file, you can use the following command:

```bash
antlr4-parse <path-to-grammar-file> program < <path-to-rust-file>
```

For example, to verify the grammar on the file `samples/rust1/if_expr.rs`, you can use the following command:

```bash
antlr4-parse grammars/Rust1.g4 program < samples/rust1/if_expr.rs
```

Some useful flags for `antlr4-parse` are:
- `-tree`: Print the parse tree
- `-gui`: Show the parse tree in a graphical user interface
- `-tokens`: Print the tokens

