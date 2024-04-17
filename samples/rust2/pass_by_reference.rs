fn add(x: &i32, y: &i32) -> i32 {
    *x + *y
}

fn main() -> () {
    let x: i32 = 10;
    let y: i32 = 20;
    let z: i32 = add(&x, &y);
}
