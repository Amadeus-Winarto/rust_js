fn main() -> () {
    let counter = mutex_new(0);
    let t0 = thread_spawn(|| -> () {
        let data = lock(counter);
        *data = *data + 1;
    });

    let t1 = thread_spawn(|| -> () {
        let data = lock(counter);
        *data = *data + 1;
    });

    thread_join(t0);
    thread_join(t1);
}
