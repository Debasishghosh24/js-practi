
// let n = 6;

// let store = 0;

// for(let i=0; i<=n-1; i++) {
//     store = store + (i + 1);
// }
// console.log(store);

function triangle(n) {
    let store = 0;

    for(let i=0; i<n; i++) {
        store = store + (i + 1);
    }
    return store;
}

console.log(triangle(1));
console.log(triangle(6));
console.log(triangle(215))