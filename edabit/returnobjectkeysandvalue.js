function keysAndValues(obj) {
    let keys = Object.keys(obj).sort(); 
    console.log(keys);
    let values = [];

    
    for (let i = 0; i < keys.length; i++) {
        let currentKey = keys[i];
        values.push(obj[currentKey]);
    }

    return [keys, values];
}

console.log(keysAndValues({ b: 2, a: 1, c: 3 })); 
