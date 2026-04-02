
function isSubset(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    
   
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break; 
      }
    }
    
    
    if (!found) {
      return false;
    }
  }
  
  return true;
}

console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]))