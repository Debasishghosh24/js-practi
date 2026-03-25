
// let str = "backbone"
// let store = []
// let store2 = []
// for(let i=0; i<=str.length-1; i++) {
    
//     if(i % 2 === 0) {
//         store = store + str[i];
//     }
//     if(i % 2 !== 0) {
//         store2 = store2 + str[i];
//     }  
// }
//   console.log(store + " " + store2);
 

function evenoddString(str) {
    let even = []
    let odd=[]

    for(let i=0; i<=str.length-1; i++) {
        if(i % 2 === 0) {
            even = even + str[i];
        }else{
            odd = odd + str[i];
        }
    }
    return even + " " + odd
}

console.log(evenoddString("backbone"));
console.log(evenoddString("edabit"));
