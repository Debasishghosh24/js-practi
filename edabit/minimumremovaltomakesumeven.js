
// const arr = [5,7,9,11]

// let store = 0;

// for(let i=0; i<arr.length; i++) {
//     store = store + arr[i];
// }

// if(store%2 === 0) {
//     console.log("0")
// }else{
//     console.log("1")
// }

function minimumRemovals(arr) {
    let store = 0;

    for(let i=0; i<arr.length; i++) {
        store = store + arr[i];
    }

    if(store % 2 === 0) {
        return 0;
    }else{
        return 1;
    }
}

console.log(minimumRemovals([1, 2, 3, 4, 5]));
console.log(minimumRemovals([5, 7, 9, 11]));
console.log(minimumRemovals([5, 7, 9, 12]));