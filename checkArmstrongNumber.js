
let number = "123"
let result = 0;

for(let i=0; i<=number.length-1; i++) {
    result = result + (number[i] ** number.length);
}
console.log(result);