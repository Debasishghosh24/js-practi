
function findindex(arr,str) {
    for(let i=0; i<=arr.length; i++) {
        if(arr[i] === str){
            return i;
        }
    }
   
}
 console.log(findindex(["hi", "edabit", "fgh", "abc"], "fgh"))

 console.log(findindex(["Red", "blue", "Blue", "Green"], "blue"))

 console.log(findindex(["a", "g", "y", "d"], "d"))

 console.log(findindex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))
