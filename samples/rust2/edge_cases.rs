// fn main() -> () {
//     let mut x = 0;
//     let counter = mutex_new(0);
//     while (x < 10) {
//         println!("I'll Live? ");
//         let guard = lock(counter);
//         *guard = *guard + 1;
//         x = x + 1;
//         let y = 1;

//         if (x == 5)
//         {
//             break;
//         }
//     };
//     println!("Done!");
//     let guard = lock(counter);
//     println!("Guard: ", guard);
// }

// fn main() -> () {
//     let x = mutex_new(0);

//     loop
//     {
//         println!("Hi!");
//         let data = lock(x);
//         *data = *data + 1;

//         if (*data == 5) {
//             break;
//         }
//     };
//     let data = lock(x);
//     println!(data);
// }

// fn main() -> () {
//     let mut x = 0;

//     loop
//     {
//         let y = 10;
//         {
//             let x = 10;
//             break;
//         };
//         println!("Hi!");
//         x = x + 1;
//         // break;
//     };
//     println!(x);
// }

// // fn main() -> () {
// //     let counter = mutex_new(0);

// //     scoped_threads(|| -> () {
// //         scope_spawn(|| -> () {
// //             let data = lock(counter);
// //             *data = *data + 1;
// //         });
// //         scope_spawn(|| -> () {
// //             let data = lock(counter);
// //             *data = *data + 1;
// //         });
// //     });

// //     let data = lock(counter);
// //     println!(*data);
// // }
