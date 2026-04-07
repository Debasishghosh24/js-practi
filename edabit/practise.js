
// let name = "debasisghhosh"

// let store = {}

// for(let i=0; i<=name.length-1; i++) {
//     let char = name[i];
    
//     if(store[char]) {
//         store[char]++;
//     }else{
//         store[char] = 1;
//     }

    
// }

// console.log(store);


// let number = 9875

// let store = 0;

// while(number>0) {
//     let rem = number % 10;
//     number = Math.floor(number / 10);
//     store = store + rem;
// }

// console.log(store);

// let number = 67;

// let check = 1;

// for(let i=2; i<number-1; i++) {

//     if(number%i === 0) {
//         check=0;
//         break;
//     }

// }
// if(check){
//     console.log("this is prime");
// }else{
//     console.log("this is not prime");
// }


// for(let i=2; i<100; i++) {
//     let store = 1;

//     for(let j=2; j<i-1; j++) {
//         if(i % j === 0) {
//             store = 0;
//         }
//     }
//     if(store){
//         console.log(i);
//     }
// }

let palindrome = "santi";

let store = ""
for(let i=palindrome.length-1; i>=0; i--) {
    store = store + palindrome[i];
}
if(palindrome === store){
    console.log("this is palindrome");
}else{
    console.log("This is not palindrome");
}