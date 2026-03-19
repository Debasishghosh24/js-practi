let arr = [2,3,5, -1, ]

let count = 0;

for(let i=0; i<arr.length; i++) {

    if(arr[i]< 0) {
        count ++;
    }

}

console.log(count);