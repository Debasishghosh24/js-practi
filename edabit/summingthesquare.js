
// let number = 3;

// let store = 0;

// for(let i = 1; i<=3; i++) {
//     store = store + i*i;
// }
// console.log(store);

function summingsquare (n) {
    let store = 0;

    for(let i=1; i<=n; i++) {
        store = store + i*i;
    }
    return store;
}
console.log(summingsquare(3));