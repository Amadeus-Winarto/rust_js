# Sample Descriptions

This README file contains descriptions of the samples in this directory. The source files are split into two directories: `rust1` and `rust2`. The `rust1` directory contains the source files for the samples that demonstrate the basic features of our compiler and virtual machine. The `rust2` directory contains source files that demonstrate more advanced features of our compiler and virtual machine.

This README is split into two sections: one for each directory. Each section contains a list of the samples in that directory, along with a brief description of each sample.

## rust1

1. Filename: `block_stmts.rs`
    Objectives:
        - Demonstrates the use of block statements in our language.
        - Demonstrates variable and constant declarations.
        - Demonstrates the use of the `println!` function.
        - Demonstrates environment lookup for variable values.

2. Filename: `broken_syntax.rs`
    Objective:
        - Demonstrates the error handling capabilities of our compiler, specifically for syntax errors.

3. Filename: `const_decl.rs`
    Objective:
        - Demonstrates constant declarations in our language.
        - Demonstrates the compile-time evaluation of constant expressions.

    Note:
        - `pi` is declared to be `1.570795 * (4.0 - 3.0 + 1.0)`. However, we see that in the assembly output, this is immediately translated to the exact value of `pi` instead, demonstrating the compile-time evaluation of constant expressions.
4. Filename: `expr.rs`
    Objective:
        - Demonstrates the use of expressions in our language.

5. Filename: `function_appl.rs`
    Objective:
        - Demonstrates function declaration in our language.
        - Demonstrates function application in our language.

    Note:
        - The function `add` is declared to take two arguments, `a` and `b`, and return their sum.
        - The type of the arguments and the return type must be specified in the function declaration. This is different from Rust, where the types can be inferred.
        - The `()` type can be used to specify that a function does not return a value.

6. Filename: `function_edge_cases.rs`
    Objective:
        - Demonstrates one of Rust quirks that we have implemented in our language.

    Note:
        - Within the if-expression, both branches are not fully executed due to the return statements. However, the value of the if-expression remains to be the value of the last expression in the block, even if the expression is logically not executed. Therefore, the if-expression has type `bool` and not `()`.
        - The return statements mean that the type of `testing()` is `<> -> i32`, as specified in the function declaration. This is even though the if-expression in the function body has type `bool`.

7. Filename: `if_expr.rs`
    Objective:
        - Demonstrates the use of if-expressions in our language.

    Note:
       - We expect to see the following:
        ```bash
        x is three
        x is four
        x is something else
        true
        false
        ```
8. Filename: `shadowing.rs`
    Objective:
        - Demonstrates shadowing in our language.

    Note:
        - Since rust defaults variables to be immutable, it is not possible to reassign a value to a variable that is not declared mutable. However, shadowing allows us to declare a new variable with the same name as an existing variable, thus achieving the same effect as reassigning a value to the existing variable.
        - We expect to see the following:
        ```bash
            3
            5
            6
        ```

9. Filename: `strings.rs`
    Objective:
        - Demonstrates the use of strings in our language.
        - Demonstrates the evaluation of block expressions that yield values;

    Note:
        - Strings are represented as a pointer to the first character in the string and the length of the string.
        - We expect to see the following:
        ```bash
        4
        Testing 3
        ```

## Rust2

1. `borrows.rs`
    Objective:
        - Demonstrates the use of `mut` keyword to declare mutable variables.
        - Demonstrates the use of mutable borrows in our language.

    Note:
        - The type system separates the types `&i32` and `i32`. The *dereference operator* `*` allows us to access the value of a reference.
        - By mutably borrowing a variable, we can change the value of the variable through the reference, as shown in the line `*y = 5;`.
        - The `println!` function automatically dereferences the reference to print the value of the variable, as shown in the line `println!(y);`.
        - We expect to see the following:
        ```bash
        5
        5
        ```
2. `broken_borrows.rs`
    Objective:
        - Demonstrates simple borrow checking by the compiler.

    Note:
        - The error message is displayed when we try to borrow a variable mutably while it is already borrowed immutably.
        - We expect to see the following:
        ```bash
        Error: Cannot borrow `x` as mutable because it is also borrowed as immutable.
        ```
        - If we swap lines 3 and 4, we expect to see the following:
        ```bash
        Error: Cannot borrow `x` as immutable because it is also borrowed as mutable.
        ```
3. `broken_deduced_var_types.rs`
   Objective:
       - Demonstrates basic type inference in our language for variables.
       - Demonstrates the strong type system of our language.

    Note:
       - The code fails because we are adding `i32` and `f32` types, which are not compatible.
       -
4. `broken_mutex.rs`
   Objective:
       - Demonstrates bugs that are captured by the borrow checker.

    Note:
       - The code fails because variable `counter` of type `Mutex<i32>` is being captured via immutable borrow by the two closures which are then passed to `thread_spawn`. The borrow checker cannot prove that the reference to the mutex will not die before the threads exit. This leads to a lifetime issue.
       - We expect to see the following:
       ```bash
       Line 3: closure may outlive the current function, but it borrows counter variables
       ```

5. `broken_spawn_threads.rs`
    Objective:
        - Demonstrates bugs that are captured by the borrow checker.

    Note:
        - Similar to the previous case, the variable `counter` of type `i32` is being captured via mutable borrow by the two closures which are then passed to `thread_spawn`
        - We expect to see the following:
        ```bash
        Line 3: closure may outlive the current function, but it borrows counter variables
        ```

6. `spawn_threads.rs`
   Objective:
       - Demonstrates the use of threads in our language.
       - Demonstrates difference in default between Rust and Rust2's capture behaviours

    Note:
        - In Rust, the above code would not compile. This is because captures in Rust is evaluated in the following order:
          - Immutable borrows
          - Mutable borrows
          - Move
        In this case, the closure captures by mutable borrow. This however leads to 2 closures borrowing the same variable mutably, which is not allowed in Rust.

        - In Rust2, the above code compiles. This is because captures in Rust2 is evaluated according to how the name appears. In this case, since the name `counter` appears without any `&` or `&mut`, it is captured by move. This means that the variable is moved into the closure, and the closure owns the variable. This is allowed in Rust2.

        - To demonstrate that a move indeed occurs, we expect to see the following:
        ```bash
        t0: counter = 1
        t1: counter = 2
        counter = 0
        ```
        We see that the main thread's `counter` is not modified by the threads, and the threads each have their own copy of `counter`.
7. `scoped_threads.rs`
    Objective:
        - Demonstrates scoped threads in our language

    Note:
        - The source file is very similar to `broken_mutex.rs`. The problem with `broken_mutex.rs` is that the borrow checker is unable to prove that the immutable borrow of counter will not outlive the threads. `scoped_threads` solves this problem by ensuring that the threads are joined before the main thread exits. This is done by using the `scoped` function from the `thread` module.
        - This is an example of Rust programs that are correct logically but are rejected by the compiler i.e. in `broken_mutex.rs` we can see that `thread_join` is indeed called before the main thread exists and yet this is insufficient in convincing the borrow checker.
        - In Rust, an alternative to using `scoped` is to use `Arc` and `Mutex` to share the counter variable between threads. We have not implemented `Arc` in our language yet.

8. `fact.rs`
    Objective:
        - Demonstrates basic recursion in our language.

9. `pass_by_reference.rs`
    Objective:
       - Demonstrates passing of mutable references to functions in our language.
       - Demonstrates mutating the value of a variable through a mutable reference.
       - Demonstrates the borrow checker's ability to detect use-after-move errors.

    Note:
        - The function `increment` takes a mutable reference to an `i32` and increments the value of the variable by 1.
        - Note that once `increment(b)` is called, the variable `b` is moved into the function `increment`. This is because the function `increment` takes a mutable reference to `b`, and the borrow checker ensures that the variable `b` is not used after the call to `increment(b)`.
10. `while_loop.rs`
    Objective:
        - Demonstrates the use of while loops in our language.

    Note:
        - The code increments `x` until it reaches 5.
        - We expect to see the following:
        ```bash
        1
        2
        3
        4
        5
        ```
11. `infinite_loop.rs`
    Objective:
        - Demonstrates the use of infinite loops in our language.

    Note:
        - The code should print "I'll Live? " until the VM memory is exhausted.
12. `loops_with_locks.rs`
    Objective:
        - Demonstrates `break` keyword in loops.
        - Demonstrates interaction between loops and locks in our language.