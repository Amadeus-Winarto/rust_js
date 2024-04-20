fn fact(x: i32) -> i32 {
    let y = 1; 
    if x == 0 {
        y
    } else {
        x * fact(x - 1)
    }
}

fn main() -> () {
    println!(fact(5));
}

