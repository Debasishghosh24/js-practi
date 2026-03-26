
// let number = 34;

// let count = 1

// for(let i=2; i<=number-1; i++) {
//     if(number % i === 0){
//         count = 0;
//         break;

//     }else{
//         count=1;
//     }
// }

// if(count){
//     console.log("this is prime")
// }else{
//     console.log("this is not prime");
// }


for ( let i=2; i<=100; i++) {
    let count = 1;
    for(let j=2; j<=i-1; j++) {
        if(i % j === 0){
            count = 0;
            break;
        }

    }
    if(count){
        console.log(i);
    }
    

}