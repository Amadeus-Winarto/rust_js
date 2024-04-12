# Rust1 Features

## Literal values

Literal values are simple expressions that directly evaluate to values. These include numbers in the usual decimal notation and the two boolean values true and false.

## Variable declarations

Variable declarations are done in `Rust1` with

```rust
let my_name : i32 = x + 2;
```

Here, the name `my_name` with type `i32` (32-bit integer) gets declared within the surrounding block, and refers to the result of evaluating `x` + 2 in the rest of the block.

Notes:

- In `Rust1`, the type of a variable must be declared explicitly. This differs from `Rust` where the type can be inferred.
- In `Rust1` and `Rust`, the value of a variable is immutable by default. This means that the value of a variable cannot be changed after it has been assigned.
- In `Rust1` and in `Rust`, the visibility of a variable is limited to the block in which it is declared. This means that the variable is not accessible outside of the block in which it is declared. This follows *lexical scoping* rules.

## Constant declarations

Constant declarations are done in `Rust1` with

```rust
const MY_NAME : i32 = 3 + 2;
```

Here the name `MY_NAME` gets declared within the surrounding block and refers to the result of evaluating 3 + 2. Unlike variables, constants are evaluated at compile-time and can be instantiated in the global scope.

Notes:

- In `Rust1`, the type of a constant must be declared explicitly. This differs from `Rust` where the type can be inferred.
- In `Rust1` and `Rust`, the value of a constant is immutable by default. This means that the value of a constant cannot be changed after it has been assigned.
- In `Rust1` and in `Rust`, the visibility of a constant is limited to the block in which it is declared. This means that the constant is not accessible outside of the block in which it is declared. This follows *lexical scoping* rules.

## If/Else Expressions

Within expressions, you can let a predicate determine whether a consequent expression gets evaluated or an alternative expression. This is done by writing, for example

```rust
if p(x) {
    7
} else {
    f(y)
}
```

Note the absence of parentheses around the predicate p(x). Also notice that the consequent and alternative expressions are not followed by a semicolon. Being an expression, an if/else expression evaluates to the value of the consequent or alternative expression, depending on the value of the predicate. This behaviour enables you to write the following:

```rust
let result = if p(x) {
    7
} else {
    f(y)
};
// result now contains the value of either 7 or f(y)
```

There is no distinction between conditional expressions and conditional statements in `Rust`. Hence, we can use conditional expressions for conditional evaluation within statements, such as in the body of a function declaration, for example:

```rust

fn fact(x: i32) -> i32 {
    if (x == 0) {
        return 1; 
    } else {
        return x * fact(x-1);
    }
}
```

## Function declarations and function definitions

A function declaration is a statement that declares a name and binds it to a function. For example

```rust
fn square(x: i32) -> i32 {
    return x * x;
}
```

declares the name `square` and binds it to a squaring function, so that it can be applied as in `square(5);`. The type of the function is `i32 -> i32`, meaning that it takes an integer as argument and returns an integer.

## Blocks

Blocks make up the bodies of functions and the consequent and alternative statements of conditional statements. You can use blocks also elsewhere in your program, if you want to declare constants local to a specific scope. For example in this program

```rust
let a :i32 = 1;
{
   let a :i32 = 2;
    println!("{}", a);
}
println!("{}", a);
```

the first application of `println!` shows the value `2`, because the declaration `let a: i32 = 1;` re-declares the variable `a`. However, the second application of `println!` shows the value `1`, because the declaration `let a: i32 = 2;` is limited in scope by its surrounding block.

Furthermore, in `Rust`, blocks are expressions, meaning that they evaluate to the value of the last expression in the block. For example, the following program

```rust
let x :i32 = {
    let y :i32 = 2;
    y + 1
};
```

will bind the value `3` to the name `x`, because the block evaluates to the value of the last expression in the block, `y + 1`.

The following program has a type error:

```rust
let x :i32 = {
    let y :i32 = 2;
};
```

This is because the block evaluates to `()`, the unit type, which is not an integer.

## Boolean operators

Boolean operators in `Rust` have a special meaning. Usually, an operator combination evaluates all its arguments and then applies the operation to which the operator refers. For example, `(2 * 3) + (4 * 5)` evaluates `2 * 3` and `4 * 5` first, before the addition is carried out. However, the operator `&&` works differently. An expression e1 `&&` e2 should be seen as an abbreviation for `if e1 {e2} else {false}`. The expression e2 only gets evaluated if `e1` evaluates to `true`. The behaviour of `||` is similar: `e1 || e2` should be seen as an abbreviation for `if e1 {true} else {e2}`.

## Sequences

A program or the body of a block does not need to consist of a single statement. You can write multiple statements in a row. For example:

```rust
cube(7);
square(5);
```

The statements in such a sequence are evaluated in the given order. The result of evaluating the sequence is the result of evaluating the last statement in the sequence, in this case square(5);. Read more about sequences in section 1.1.2 Naming and the Environment of the textbook.

## Other Requirements / Features

- Entry point: The entry point of a Rust1 program is a function called `main`. This function takes no arguments and returns nothing. The body of the function is a block.
