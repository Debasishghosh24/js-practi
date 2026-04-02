
function count(n) {

    let store = 0;

    if (n === 0) return 1;

    while(n>0) {
        n = Math.floor(n/10);
        store++;
    }
    return store;
	
}

console.log(count(318));
console.log(count(4666))