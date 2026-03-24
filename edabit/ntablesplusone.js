

// let number = 7;

// let store = 0;

// for(let i=1; i<=10; i++) {
//     store = (number*i) + 1;
//     console.log(store);
// }

function tableOne(number) {
    let store = [];

    for(let i=1; i<=10; i++) {
        store.push((number*i)+1);
    }
    return store;
   
}
console.log(tableOne(7));
console.log(tableOne(1));
console.log(tableOne(3));

