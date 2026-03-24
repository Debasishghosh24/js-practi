
// let number = ("01101010");
// let store  = []

// for(let i = 0; i<=number.length-1; i++) {
//     if(number[i] == 0) {
//         store.push("false")
//     }
//     if(number[i] == 1) {
//         store.push("true");
//     }
// }
// console.log(store);

function trueOnesfalseZero(n){
    let store = [];

    for(let i=0; i<=n.length; i++) {
        if(n[i] == 0) {
            store.push("false")
        }
        if(n[i] == 1) {
            store.push("true")
        }
    }
    return store;
}
console.log(trueOnesfalseZero("101100101011"));
console.log(trueOnesfalseZero("10"));
console.log(trueOnesfalseZero("101"));