
// let concat = ([1, 2, 3], [4, 5], [6, 7]);

// let newConcat = [[1, 2, 3], [4, 5], [6, 7]]

// let store = []

// for(let i=0; i<newConcat.length; i++) {
//     console.log(...newConcat[i]);
// }

function concat(...args) {
    let store = []
    for(let i=0; i<args.length; i++) {
        store.push(...args[i]);
    }
    return store;
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]) );
console.log(concat([4, 4, 4, 4, 4]));
