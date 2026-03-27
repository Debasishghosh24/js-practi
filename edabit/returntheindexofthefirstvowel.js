
function firstVowel(str){
    let vowel = ["a", "e", "i", "o", "u"]
   

    for(let i=0; i<str.length; i++) {
        for(let j=0; j<=vowel.length; j++) {
            if(str[i] === vowel[j]){
               return i;
            }
        }
    }
   
}

console.log(firstVowel("apple"));
console.log(firstVowel("hello"));
console.log(firstVowel("strawberry"));
console.log(firstVowel("pineapple"));