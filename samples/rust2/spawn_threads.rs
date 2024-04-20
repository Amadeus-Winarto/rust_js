fn main() -> () {
    let mut counter = 0;

    let t0 = thread_spawn(|| -> () {
        counter = 1;
        println!("t0: counter = ", counter)
    });
    let t1 = thread_spawn(|| -> () {
        counter = 2;
        println!("t1: counter = ", counter)
    });

    thread_join(t0);
    thread_join(t1);

    println!("counter = ", counter);
}
