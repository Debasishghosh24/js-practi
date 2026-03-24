
// let number = 3;

// let store = 0;

// for(let i=1; i<=3; i++) {
//     store = store + i;
// }
// console.log(store);

function storenumber (n) {
    let store = 0;

    for(let i=1; i<=n; i++) {
        store = store + i;
    }
    return store;
}
console.log(storenumber(3))
console.log(storenumber(10))
console.log(storenumber(7))