

let name = "121";

let str = ""



for(let i=name.length-1; i>=0; i--) {
    str = str + name[i];
}

console.log(str);

if(str === name) {
    console.log("This is palindrome")
} else{
    console.log("This is not palindrome");
}
