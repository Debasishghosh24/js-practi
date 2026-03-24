
// const arr = ["sept22", "sept21", "october21"]
// let store = 0

// for(let i=0; i<=arr.length-1; i++) {
//     if(arr[i].startsWith("sept")) {
//        store = store + 1;

//     }
// }

// console.log(store);

const arr = ["october22", "november22", "october20", "september20", "october13"]

let store = 0;

for(let i=0; i<=arr.length-1; i++) {
    if(arr[i].startsWith("october")) {
        store = store + 1;
    }
}

console.log(store);

