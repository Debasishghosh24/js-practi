
function returnOnlyInteger(arr){
    let store = [];

    for(let i=0; i<arr.length; i++) {
        if(Number.isInteger(arr[i])) {
            store.push(arr[i])
        }
    }
    return store;
}

console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]));