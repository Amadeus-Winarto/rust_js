fn main() -> () {
    let x = 3; 
    let add3 = |a: i32| -> i32 {
        a + x
    };

    add3(3);
}
