fn main() -> () {
    let x : i32 = 3; 
    if x == 4 {
        println!("x is four");
    } else if x == 3 {
        println!("x is three");
    } else {
        println!("x is something else");
    }
}

fn is_even(n: i32) -> bool {
    return if (n + 2 == 0) {
        true
    } else {
        false
    };
}


