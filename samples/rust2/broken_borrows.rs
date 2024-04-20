fn main() -> () {
    let mut x: i32 = 3;
    let y: &i32 = &x; // Comment out this line to fix the error...
    let z: &mut i32 = &mut x; // ... or, comment out this line

    // Swap lines 3 and 4 to see a slightly different error message
}
