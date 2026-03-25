
// for(let i=1; i<=3; i++) {
//     let store = "";
//     for(let j=1; j<=5; j++){
//         store = store + "#"
//     }
//     console.log(store);
// }

// for(let i=1; i<=3; i++) {
//     let store = "";
//     for(let j=1; j<=5; j++) {
//         store = store + "$"
//     }
//     console.log(store);
// }

// for(let i=1; i<=2; i++) {
//     let store = ""

//     for(let j=1; j<=2; j++) {
//         store = store + "A"
//     }
//     console.log(store);
// }


function designingRugs (m,n,s) {
     let newstore = "";
    
    for(let i=1; i<=m; i++) {
        let store = ""
        for(let j=1; j<=n; j++) {
            store = store + s;
            
        }
        newstore += store + "\n";
       
    }
    return newstore; 
}

console.log(designingRugs(3, 5, '$'))
console.log(designingRugs(2, 2, 'A'))