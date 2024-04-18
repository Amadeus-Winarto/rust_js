# Rust2 Features

Note: all the features implemented in Rust1 are also implemented in Rust2. The following describes the additional features implemented in Rust2.

## Deduced Types for Variables

The following is now valid in Rust2:

```rust
let x = 5;
```

Since the integer literal `5` has type `integer`, the type of `x` is deduced to be `i32` by default.

## Closures

Closures are functions that can capture the enclosing environment. For example, a closure that captures the x variable:

```rust
|| -> i32 { x }
```

Other characteristics of closures include:

- using `||` instead of `()` around input variables.
- the ability to capture the outer environment variables.

Notes:

- In `Rust2`, closures must have an explicitly declared return type. This differs from `Rust` where the return type can be inferred.

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

### Borrow Checker

One of the key features in Rust is the borrow checker. The borrow checker enforces the rules of borrowing at compile time. The rules of borrowing are:

1. At any given time, there can be either one mutable reference or any number of immutable references.
2. References must always be valid.

 For example, the following code will not compile:

```rust
let mut x: i32 = 3;
let y: &i32 = &x;
let z: &mut i32 = &mut x;// Error: cannot borrow `x` as immutable because it is also borrowed as mutable
```

### Lifetimes

Rust's borrowing rules is in part enforced by lifetimes. Lifetimes are a way to ensure that references are valid for a certain amount of time. For example:

```rust
fn main() -> () {
    let mut s: i32 = 3;
    let r1: &i32 = &s;
    let r2: &i32 = &s;
    let r3: &mut i32 = &mut s;
}
```

is perfectly valid in Rust. This is because the lifetimes of `r1` and `r2` are shorter than the lifetime of `r3`, as the borrow checker can prove that `r1` and `r2` are no longer in use when `r3` is borrowed.

We simplify our implementation of Rust2 by not implementing lifetime deductions. In Rust2, the lifetime of a reference is always equal to the most restrictive block scope. The above code is therefore invalid in Rust2 as the lifetimes of `r1` and `r2` are equal to the lifetime of `r3`. This simplification allows us to avoid the complexity of lifetime deductions.

#### Lifetime and Threads

// TODO: Implement this feature
Because threads' lifetimes are not known at compile time, any references passed to a thread is assumed to have an infinite lifetime. For example:

```rust
fn main() -> () {
    {
        let s: i32 = 3;
        let r1: &i32 = &s;
        let handle = std::thread::spawn(move || {
            println!("{}", r1);
        });
    }
}
```

will error in Rust and Rust2. This is because the lifetime of `r1` is assumed to be infinite, which is longer than the lifetime of the lender `s`.
