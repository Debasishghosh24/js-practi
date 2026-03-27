
function indexShuffle(str){
    let store = "";
    for(let i=0; i<str.length; i++) {
        if(i % 2 === 0) {
            store = store + (str[i]);
        }
    }
    return store;
}
console.log(indexShuffle("abcdefg"));