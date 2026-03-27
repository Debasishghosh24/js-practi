
function greetPeople(names){

    let store = []

    for(let i=0; i<names.length; i++) {
        store.push("hello" + names[i])
    }
    return store;
}

console.log(greetPeople(["Joe"]));
console.log(greetPeople(["Angela", "Joe"]));
console.log(greetPeople(["Frank", "Angela", "Joe"]))