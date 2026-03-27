
function countVowels(str){

    let vowel = ["a", "e", "i", "o", "u"]
    let store = 0;

    for(let i=0; i<=str.length; i++) {
        for(let j=0; j<vowel.length; j++) {
            if(str[i] === vowel[j]){
                store++;
            }
        }
    }
    return store;
}

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));
