
// const arr = [1,2,3,"a", "b", 5]

// let store = [];

// for(let i=0; i<=arr.length-1; i++) {
//     if(Number.isInteger(arr[i])) {
//         store.push(arr[i])
//     }
// }
// console.log(store);

function filterString (arr) {
    let store = []

    for(let i=0; i<=arr.length-1; i++) {
        if(Number.isInteger(arr[i])){
            store.push(arr[i])
        }
    }
    return store;
}

console.log(filterString([1,2,3,5,"er", "b", "er"]))