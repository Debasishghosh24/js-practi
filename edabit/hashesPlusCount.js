
function hashPlusCount(str) {
    let store = []
    let hashes = 0;
    let pluses = 0;

    for(let i=0; i<str.length; i++) {
        if(str[i] === "#") {
            hashes++;
        }else{
            pluses++;
        }

    }
    store.push(hashes,pluses);
    return store;

}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("##+++#"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));