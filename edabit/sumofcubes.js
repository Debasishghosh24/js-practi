
function sumOfCubes(arr){
    let store = 0;

    for(let i=0; i<arr.length; i++) {
        store = store + (arr[i] ** 3);
    }
    return store;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
