
// const arr = [1,3,5]


// for(let i=0; i<=arr.length-1; i++) {
//     console.log(-arr[i])

// }


function additiveInverse(arr) {
    let store = [];
    for(let i=0; i<=arr.length-1; i++) {
        store.push(-arr[i])
        
    }
    return store;
}
console.log(additiveInverse([5, -7, 8, 3]));
console.log(additiveInverse([1, 1, 1, 1, 1]));
console.log(additiveInverse([-5, -25, 35]));
