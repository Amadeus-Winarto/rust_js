fn main() -> () {
    let mut x = 0;
    let counter = mutex_new(0);
    while (x < 10) {
        println!("I'll Live? ");
        let guard = lock(counter);
        *guard = *guard + 1;
        x = x + 1;
        let y = 1;

        if (x == 5) {
            break;
        };
    };
    println!("Done!");
    let guard = lock(counter);
    println!("Guard: ", guard);
}
