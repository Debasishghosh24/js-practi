

let str = "madam"

let empty = ""


for(let i=str.length -1; i>=0; i--) {
    
    empty = empty + str[i]
}

console.log(empty);

if(str === empty) {
    console.log("this is palindrome")
}else{
    console.log("this is not palindrome")
}