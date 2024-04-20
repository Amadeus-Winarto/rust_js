fn main() -> () {
    let mut counter = 0;

    let closure = || -> () {
        let counter_value = &mut counter;
        *counter_value = *counter_value + 1;
    };

    let t0 = thread_spawn(|| -> () {
        let counter_value = &mut counter;
        *counter_value = *counter_value + 1;
    });

    let t1 = thread_spawn(|| -> (){
        let counter_value = &mut counter;
        *counter_value = *counter_value + 1;
    });

    thread_join(t0);
    thread_join(t1);

    println!("counter: {}", counter);
}
