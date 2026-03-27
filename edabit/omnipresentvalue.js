
function isOmnipresent(arr, value) {
    for(let i=0; i<arr.length; i++) {
        flag = 0;

        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] === value) {
                flag = 1;
            }
        }

        if(flag === 0) {
            return false;
        }
        if(flag === 1) {
            return true;
        }
    }

}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));