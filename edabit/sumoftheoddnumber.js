
// let number = 5; 

// let store = 0;

// for(let i=1; i<=number; i++) {
//     if(i % 2 !== 0) {
//         store = store + i;
//     }
// }
// console.log(store);

function oddnumber (n) {
    let store = 0;

    for(let i =1; i<=n; i++) {
        if(i % 2 !== 0) {
            store = store + i;
        }
        
    }
    return store;
}
console.log(oddnumber(5));
console.log(oddnumber(13));
console.log(oddnumber(47));

