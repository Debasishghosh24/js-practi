
function repeat(str,n) {
    let store = ""

    for(let i=0; i<str.length; i++) {
        for(let j=0; j<n; j++){
            store = store + str[i];
        }
    }
    return store;
}
console.log(repeat("mice", 5))