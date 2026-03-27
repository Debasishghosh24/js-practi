
function indexShuffle(str){
    let store = "";

    let odd = ""
    let even = ""
    for(let i=0; i<str.length; i++) {
        if(i % 2 === 0) {
            even = even + (str[i]);
        }else{
            odd = odd + (str[i]);
        }
        
    }
    store = (even + odd);
    
    return store;
}
console.log(indexShuffle("abcdefg"));