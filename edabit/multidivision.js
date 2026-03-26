
function abcmath(a, b, c) {
    for (let i = 0; i < b; i++) {
        a += a;
    }
    return a % c === 0;
}
console.log(abcmath(42, 5, 10));