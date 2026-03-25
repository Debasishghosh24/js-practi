
// const arr = ["clever", "meek", "hurried", "nice"]

// let newstore = []

// for(let i=0; i<=arr.length-1; i++) {
//     newstore.push ( arr[i] + "ly");
    
// }

// console.log(newstore);


function arrEnding(arr, ending){
    let store = [];
    for(let i=0; i<= arr.length-1; i++) {
        store.push(arr[i] + ending)
    }
    return store;

}

console.log(arrEnding(["clever", "meek", "hurried", "nice"], "ly"));
console.log(arrEnding(["new", "pander", "scoop"], "er"));
console.log(arrEnding(["bend", "sharpen", "mean"], "ing"))