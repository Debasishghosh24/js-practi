
let string = "madam"
let store = ""

for(let i=string.length-1; i>=0; i--) {
    store = store + string[i];
}
console.log(store)
if(string === store) {
    console.log("this is palindrome")
}else{
    console.log("This is not palindrome")
}

