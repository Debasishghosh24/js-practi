
const arr = [23,1,45,3,5,90]

let min = arr[0];

for(let i=0; i<=arr.length-1; i++) {
    if(arr[i] < min){
        min = arr[i]
    }
}

console.log(min);