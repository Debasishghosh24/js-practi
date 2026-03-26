
function sumofdigit(num) {

    let store = 0;

    while(num>0) {
        let rem = num % 10;
        store = store + rem;
        num = Math.floor(num/10);
    }
    return store;
}
console.log(sumofdigit(345))