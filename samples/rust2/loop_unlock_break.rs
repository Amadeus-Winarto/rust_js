fn main() -> () {
    let mut x = 0;
    let counter = mutex_new(0);
    let c2 = mutex_new(1);

    loop {
        println!("I'll Live? ");
        let guard = lock(counter);
        x = x + 1;

        if (x == 5) {
            let g1 = lock(c2);
            println!("BREAK!");
            break;
        };
    };
    println!("Done!");
    println!("Done!2");
    let guard = lock(counter);
    let g1 = lock(c2);
    println!("Guard: ", guard);
    println!("Done!3");
}
