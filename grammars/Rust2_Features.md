# Rust2 Features

Note: all the features implemented in Rust1 are also implemented in Rust2. The following describes the additional features implemented in Rust2.

## Closures

Closures are functions that can capture the enclosing environment. For example, a closure that captures the x variable:

```rust
|| -> i32 { x }
```

Other characteristics of closures include:

- using `||` instead of `()` around input variables.
- the ability to capture the outer environment variables.

Notes:

- In `Rust2`, closures cannot take in parameters. This differs from `Rust` where closures can take in parameters.
- In `Rust2`, closures must have an explicitly declared return type. This differs from `Rust` where the return type can be inferred.
- In `Rust2`, closures _cannot_ be bound to names.

## Mutability

By default, variables in Rust2 are immutable. To make a variable mutable, use the `mut` keyword. For example:

```rust
let mut x :i32 = 5;
x = 6;
```

This modifies the value of `x` from 5 to 6.

## Borrowing

By default, Rust2 pass primitives by value. To pass by reference, use the `&` symbol. For example:

```rust
let x = 5;
fn add_one(x: &i32) -> i32 {
    *x + 1
}
add_one(&x); // No new copy of integer is created
```

This passes the reference of `x` to the `add_one` function.

The above code is an example of _immutable borrow_; the function `add_one` cannot modify the value of `x`. To allow the function to modify the value of `x`, use the `&mut` symbol. For example:

```rust
let mut x = 5;
fn add_one(x: &mut i32) {
    *x += 1;
}
add_one(&mut x); // x is now 6
```

This is a _mutable borrow_.

Notes:

- In Rust2, there is no _deref coercion_. This means that the `*` operator must be used to dereference a pointer. This differs from Rust where the `*` operator is optional. For example:

    ```rust
    fn add_one(x: &i32) -> i32 {
        x + 1 // Error: cannot add i32 to &i32
    }
    ```

    compiles in Rust but not in Rust2.
