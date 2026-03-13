// let name =  "Suman saha"

// for(let i=0; i<name.length; i++) {
//     console.log(name[i]);

// }


// const name = "Debasish";

// let count = {}

// for(let i=0; i<name.length; i++) {
//     let ch = name[i];
//     console.log(ch);
   
//     if(count[ch]) {
//         count[ch] = count[ch] + 1;
//     }
//     else {
//         count[ch] = 1;
//     }
// }

// console.log(count)



const name = "Debasish Ghosh"

let count = {};

for(let i= 0; i< name.length; i++) {
    const store = name[i];

    if(count[store]) {
        count[store] = count[store] + 1;
    } else{
        count[store] = 1;
    }
   
}

console.log(count);



