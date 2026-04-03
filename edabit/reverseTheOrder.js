
function reverse(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    if (word.length >= 5) {
      let reversedWord = "";
      
      for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
      }
      result.push(reversedWord);
    } else {
      result.push(word);
    }
  }

  return result.join(" ");
}

console.log(reverse("Reverse"));
console.log(reverse("This is a typical sentence."));