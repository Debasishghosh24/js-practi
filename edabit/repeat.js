
function repeat (items, times){
    let store = []

    for(let i=0; i<times; i++) {
        store.push(items);
    }
    return store;
}
console.log(repeat("edabit", 3))
console.log(repeat(13, 5));
console.log(repeat("7", 2))
console.log([])