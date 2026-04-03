function warOfNumbers(arr) {
  let evenSum = 0;
  let oddSum = 0;

 
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];

    if (currentNumber % 2 === 0) {
      
      evenSum += currentNumber;
    } else {
      
      oddSum += currentNumber;
    }
  }

  if (evenSum > oddSum) {
    return evenSum - oddSum;
  } else {
    return oddSum - evenSum;
  }
}


console.log(warOfNumbers([2, 8, 7, 5]));      
console.log(warOfNumbers([12, 90, 75]));    
console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])); 