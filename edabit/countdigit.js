

// let num = 2345;
// let sum= 0;
// while(num >0){
// rem = num % 10;
// sum = sum + rem;
// num = Math.floor(num/10);

// }


// console.log(sum);

// let num = 2345;
// let sum = 0;

// while (num >0) {
//     num = Math.floor(num /10);
//     sum ++;
// }

// console.log(sum);


// let num = 4567
// let store = 0;
// while(num>0) {
//     let rem = num % 10;
//     store = store + rem;
    
// }
// console.log(store);


// function countdigit(num) {
//     let store = 0;

//     while(num >0) {
//         num = Math.floor(num /10)
//         store++;
//     }
//     return store;
// }
// console.log(countdigit(6758434));

// function sumdigit(num) {
//     let store = 0;

//     while(num >0) {
//         let rem = num % 10;
//         store = store + rem;
//         num = Math.floor(num/10);

//     }
//     return store;
// }
// console.log(sumdigit(1234));


function countdigit(num) {

    let store = 0;

    while(num>0) {
        num = Math.floor(num/10)
        store++
    }
    return store;
}
console.log(countdigit(4569))