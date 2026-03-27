
function charCount(myChar, str){

    let store = 0;

    for(let i=0;i<str.length; i++) {
        if(str[i] === myChar){
            store++;
        }
    }
    return store;
}
console.log(charCount("a", "edabit"))
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));