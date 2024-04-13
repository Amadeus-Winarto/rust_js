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
