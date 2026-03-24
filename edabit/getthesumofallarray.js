
// const arr = [1,5,6]

// let store = 0;

// for(let i=0; i<=arr.length -1; i++) {
//     store = store + arr[i];
// }
// console.log(store);


function getSumOfItems (arr) {
    let store = 0

    for(let i=0; i<=arr.length-1; i++) {
        store = store + arr[i];
    }
    return store;
}

console.log(getSumOfItems([2, 7, 4]))