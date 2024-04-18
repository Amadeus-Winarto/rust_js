fn main() -> () {
    let mut counter = 0;

    let t0 = thread_spawn(|| -> () {
        let x = &mut counter;
        *x = *x + 1;
    });
    let t1 = thread_spawn(|| -> () {
        let x = &mut counter;
        *x = *x + 1;
    });

    thread_join(t0);
    thread_join(t1);

    println!("counter = ", counter);
}
