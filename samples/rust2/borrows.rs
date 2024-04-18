fn main() -> () {
    let mut x: i32 = 3;
    let y: &mut i32 = &mut x;
    let z: i32 = *y;
    *y = 3;
}
