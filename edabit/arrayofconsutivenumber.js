
function getSequence(low, high) {
    let empty = [];

    for(let i=low; i<=high; i++){
        empty.push(i)
    }
    return empty;
}

console.log(getSequence(1, 5));

console.log(getSequence(98,100));

console.log(getSequence(1000, 1000));