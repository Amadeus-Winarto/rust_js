fn increment(x: &mut i32) -> () {
    *x = *x + 1;
}

fn main() -> () {
    let mut counter = 0;
    let b = &mut counter;

    increment(b);
    println!("Counter: ", counter);

    // increment(b); // Uncommenting this line will cause a compile-time error
}
