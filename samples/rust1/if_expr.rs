fn is_even(n: i32) -> bool {
    return if (n % 2 == 0) { true } else { false };
}

fn is_three_or_four(x: i32) -> () {
    if x == 4 {
        println!("x is four");
    } else if x == 3 {
        println!("x is three");
    } else {
        println!("x is something else");
    }
}

fn main() -> () {
    is_three_or_four(3);
    is_three_or_four(4);
    is_three_or_four(5);

    println!(is_even(2));
    println!(is_even(3))
}
