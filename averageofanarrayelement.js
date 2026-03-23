
const arr = [10, 20, 30, 40]

let store = 0;

for(let i=0; i<=arr.length-1; i++) {
    store = store + arr[i]
}
console.log(store);

let average = store / arr.length;

console.log(average);
