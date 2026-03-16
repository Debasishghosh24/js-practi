
let number = "8764"

let min = 9

for(let i=0; i<=number.length-1; i++) {
    if(number[i] < min) {
        min = number[i];
    }
}

console.log(min);