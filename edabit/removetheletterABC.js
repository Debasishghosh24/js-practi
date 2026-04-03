
function removeABC(str) {
  let result = "";
  let found = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    
    if (char === 'a' || char === 'b' || char === 'c') {
      found = true;
      continue; 
    }
    result += str[i];
  }

  return found ? result : null;
}

console.log(removeABC("This might be a bit hard"))