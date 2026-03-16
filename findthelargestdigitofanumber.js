

let num = "8639"

let max = 0;

for(let i=0; i<= num.length-1; i++) {
    if(num[i] < max){
        max=num[i];
    }
}

console.log(max);