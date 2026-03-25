
function countdown(store) {
    let newstore = [];

    for(let i=store; i>=0; i--) {
        newstore.push(i);
    }
    return newstore;
}

console.log(countdown(5) );
console.log(countdown(1) );
console.log(countdown(0));
