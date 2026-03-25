
// const arr = [1,2,3,4,5]

// let store = [];

// for(let i=0; i<=arr.length-1; i++) {
//     store.push(-arr[i]);
// }
// console.log(store);

function negate(arr) {
    let store = [];

    for(let i=0; i<=arr.length-1; i++) {
        store.push(-arr[i]);
    }
    return store;
}
console.log(negate([1, 2, 3, 4]));
console.log(negate([-1, 2, -3, 4]));
console.log(negate([]))