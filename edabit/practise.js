
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


let number = 9875

let store = 0;

while(number>0) {
    let rem = number % 10;
    number = Math.floor(number / 10);
    store = store + rem;
}

console.log(store);