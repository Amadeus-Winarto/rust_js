fn main() -> () {
    let counter = mutex_new(0);

    scoped_threads(|| -> () {
        scope_spawn(|| -> () {
            let data = lock(counter);
            *data = *data + 1;
        });
        scope_spawn(|| -> () {
            let data = lock(counter);
            *data = *data + 1;
        });
    });

    let data = lock(counter);
    println!(*data);
}