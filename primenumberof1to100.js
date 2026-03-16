
let store = 0;

for(let i=2; i<=100; i++) {
    let count = 1;

    for(let j=2; j<=i-1; j++) {
        if(i % j === 0) {
            count = 0;
            
        
        }
    }

    if(count) {
        store++;
    }
    
}
console.log(store);