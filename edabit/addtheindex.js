
// const arr = [1,2,3,4,5];

// let store = []

// for(let i=0; i<=arr.length-1; i++) {
//     store.push (arr[i] + i);
// }
// console.log(store);

function addIndex (arr) {
    let store = [];

    for(let i=0; i<=arr.length-1; i++) {
        store.push (arr[i] + i)
    }
    return store;
}
console.log(addIndex([1,2,3,4,5]))
console.log(addIndex([5, 4, 3, 2, 1]))
