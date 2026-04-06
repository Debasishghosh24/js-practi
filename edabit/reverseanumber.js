
// let number = 3456

// let store = 0;

// while(number>0){
//     let rem = (number % 10)
//     number = Math.floor(number/10)

//     store = (store * 10) + rem;
// }
// console.log(store);

// function reverseNumber(num){
//     let store = 0;
   

//     while(num>0){
//         let rem = (num % 10)
//         num = Math.floor(num / 10)

//         store = (store * 10) + rem;
//     }
//    return store;
// }
// console.log(reverseNumber(12145454));


// function reverseString(num) {
//     let store = 0;

//     while(num>0) {
//         let rem = num % 10;
//         num = Math.floor(num/10)
//         store = (store * 10) + rem;
//     }
//     return store;
// }
// console.log(reverseString(4567));



let number = 8679;

let store = [];

while(number>0) {
    let rem = number % 10;
    number = Math.floor(number/10)
    store = (store * 10) + rem;
   

}
console.log(store);