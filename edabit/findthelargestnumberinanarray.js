
// const arr = [4,5,7,6,9]

// let max = arr[0];

// let store = 0;

// for(let i=0; i<=arr.length-1; i++) {
//     if(arr[i] > max) {
//         store =  arr[i];

//     }
// }
// console.log(store);


function findLargestNumber(arr) {
    let max = arr[0];
    let store = 0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i]>max) {
            store = arr[i];
        }
    }
    return store;
}
console.log(findLargestNumber([4,5,8,7,3]));
console.log(findLargestNumber([300, 200, 600, 150]));
console.log(findLargestNumber([1000, 1001, 857, 1]));

