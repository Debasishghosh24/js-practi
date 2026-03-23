
const arr = [2,3,4,5,6,7]

let odd = 0;

for(let i=0; i<=arr.length-1; i++) {
    if(arr[i] % 2 !== 0){
        odd++;

    }
}

console.log(odd);