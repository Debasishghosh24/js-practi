
function mean(num) {
  
  let strNum = String(Math.abs(num)); 
  let sum = 0;

  
  for (let i = 0; i < strNum.length; i++) {
    
    sum += parseInt(strNum[i]);
  }

  return sum / strNum.length;
}

console.log(mean(42));   
console.log(mean(12345)); 
console.log(mean(666));   