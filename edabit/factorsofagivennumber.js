
// let n = 9;

// let store = [];

// for(let i=1; i<=n; i++) {

//     if(n % i == 0) {
//         store.push(i);
//     }

    

// }
// console.log(store);

function factor (num) {
    let store = [];
    for(let i=1; i<=num; i++) {
        if(num % i == 0) {
            store.push(i);
        }
    }
    return store;

}


console.log(factor(9));
console.log(factor(5));
console.log(factor(12));