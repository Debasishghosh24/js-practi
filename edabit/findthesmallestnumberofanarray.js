
function findSmallestNum(arr) {

    let smallestNumber = arr[0];

   

    

    for(let i=0; i<=arr.length-1; i++) {
        if(arr[i]<smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
	
}
console.log(findSmallestNum([34, 15, 88, 2]));
console.log(findSmallestNum([34, -345, -1, 100]));