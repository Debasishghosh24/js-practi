
// let n = "mom"
// let str = ""

// for(let i=n.length-1; i>=0; i--) {
//     str = str + n[i];
// }
// if(str === n) {
//     console.log("true")
// }else{
//     console.log("false");
// }

function checkPalindrome(str) {
    let empty = ""
    for(let i=str.length-1; i>=0; i--) {
        empty = empty +  str[i];
    }

    if(empty === str){
        
        return true;

    }else{
        return false;
    }

    return empty;
}

console.log(checkPalindrome("mom"));
// console.log(checkPalindrome("scary"));
// console.log(checkPalindrome("reviver"));
// console.log(checkPalindrome("stress"));