
let arr = [[2,3,4,5],[4,5,6,3], [4,5,9,2]]


let store = []

for(let i=0; i<=arr.length-1; i++) {
    let min = arr[0];
    
    if(arr[i] < min){
        store =  store + arr[i];
    }
}
console.log(store);