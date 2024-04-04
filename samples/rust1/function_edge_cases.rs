fn main() -> () {
    testing();
}

fn testing() -> i32 {
    let x: bool = if true {
        return 2;
        false
    } else {
        return 4;
        false
    };
}
