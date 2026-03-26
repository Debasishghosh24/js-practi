// const arr = [1,2,3,4,5,]


// let store = []

// for(let i=0; i<=arr.length-1; i++) {
//     if(arr[i] % 2 === 0) {
//         store.push(arr[i]-1);
//     }
//     if(arr[i] % 2 !== 0){
//         store.push(arr[i] + 1);
//     }
// }


// console.log(store);

function transform(arr){
    let store = []

    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 === 0) {
            store.push(arr[i] -1)
        }
        if(arr[i] % 2 !== 0){
            store.push(arr[i] + 1)
        }
    }
    return store;
}

console.log(transform([1, 2, 3, 4, 5]));
console.log(transform([3, 3, 4, 3]));
console.log(transform([2, 2, 0, 8, 10]));