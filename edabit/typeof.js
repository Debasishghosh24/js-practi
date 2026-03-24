
// function arrayvaluestypes(arr){
//     let store = []
//     for(let i=0; i<=arr.length-1; i++) {
//         store.push (typeof arr[i]);

//     }
//     return store;
    
// }

// console.log(arrayvaluestypes([1, 2, "null", []]))


const arr = [1, 2, "null", []]



let store = []
for(let i=0; i<=arr.length-1; i++) {
    store = store + (typeof arr[i]);

}

console.log(store);