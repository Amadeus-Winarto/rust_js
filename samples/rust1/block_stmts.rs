fn main() -> () {
    {
        {
            let x: i32 = 5;
            println!(x);
        };
        let y: i32 = 6;
        {
            println!(y);
            const x: i32 = y + 1;
            println!(x);
        };
    }
}
