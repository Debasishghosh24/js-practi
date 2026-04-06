


// for(let i=2; i<=100; i++) {
//     let count = 1;

//     for(let j=2; j<=i-1; j++) {
        
//         if(i % j === 0) {
//             count = 0;
//             break;
            
            
        
//         }
//     }

//     if(count) {
//         console.log(i);
//     }
    
// }


let store = []

for(let i=1; i<=100; i++) {
    let value = 1;
    for(let j=2; j<i; j++) {
        if(i % j === 0) {
            value = 0;
        }
    }
    if(value) {
        store.push(i);
    }
}
console.log(store);
