
function calculateDifference(obj,limit){
    
    let store = 0;
    
    for(let i in obj) {
        store = store + obj[i];
    }
    return (store - limit);
}
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) );