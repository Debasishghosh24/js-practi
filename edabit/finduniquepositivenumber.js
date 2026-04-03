
function uniqueArr(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    
    if (currentNum > 0) {
      
      if (!result.includes(currentNum)) {
       
        result.push(currentNum);
      }
    }
  }

  return result;
}


console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])); 
console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));  
console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));     
console.log(uniqueArr([]));                                   