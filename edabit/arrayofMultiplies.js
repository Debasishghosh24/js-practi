function arrayOfMultiples(num, length) {
    let store = [];
    for (let i = 1; i <= length; i++) {
       
        store.push(num * i);
    }
    
    return store;
}

console.log(arrayOfMultiples(7, 5)); 