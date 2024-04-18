fn main() -> () {
    let mut x: i32 = 3;
    {
        let y : i32 = 10;
        x = 3; 
    };
    x = 5;
}
