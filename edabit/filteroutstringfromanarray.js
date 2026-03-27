
function filterArray(arr) {
    let store = [];

    for(let i=0; i<arr.length; i++) {
        if(Number.isInteger(arr[i])){
            store.push(arr[i]);
        }
    }
    return store;
}
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));