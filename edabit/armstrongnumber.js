
function armstrong(num) {
    let sum = 0;

    let duplicate = num;

    while(num>0) {
        let rem = num % 10;
        num = Math.floor(num/10)
        sum = sum + (rem * rem * rem);
    }

    if(duplicate == sum) {
        return true;
    }else{
        return false;
    }
}

console.log(armstrong(371))
console.log(armstrong(35))