
// function palindrome(num) {
//     let store = 0;

//     let check = num;

//     while(num>0){
//         let rem = num % 10;
//         num = Math.floor(num/10)
//         store = (store * 10) + rem;
//     }
//    if(check == store) {
//     return true;
//    }else{
//     return false;
//    }
// }
// console.log(palindrome(4578));
// console.log(palindrome(121));


function palindrome(num) {
    let store = 0;

    let store1 = num;

    while(num>0) {
        let rem = num % 10;
        num = Math.floor(num/10)

        store = (store * 10) + rem;
    }

    if(store1 == store){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome(121));