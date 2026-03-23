
const arr = [12,23,34,45,56]

let max = arr[0]

for(let i=0; i<=arr.length-1; i++) {
    if(arr[i] > max) {
        max = arr[i];

    }
}
console.log(max);