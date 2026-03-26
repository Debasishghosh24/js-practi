
// const arr = [2,3,4,5]
// let check = 12;

// let count = 1;

// for(let i=0; i<arr.length; i++) {
//     if(check % arr[i] === 0){
//         count = 1;
//     }else{
//        count = 0;
//     }
// }

// if(count){
//     console.log("true");
// }else{
//     console.log("false");
// }

function checkFactors(factor, num) {
    let count = 1;
    
    for(let i=0; i<factor.length; i++) {
        if(num % factor[i] === 0){
            count = 1;
        }else{
            count = 0
        }
    }
    if(count){
        return true;
    }else{
        return false;
    }
}

console.log(checkFactors([2, 3, 4], 12))
console.log(checkFactors([1, 2, 3, 8], 12))
console.log(checkFactors([1, 2, 50], 100))
console.log(checkFactors([3, 6], 9))