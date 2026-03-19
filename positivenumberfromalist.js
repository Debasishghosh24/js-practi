
let arr = [-2, 10, 5, 7, -5];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        count++;
    }
}

console.log(count);