


function capMe(names) {
    let result = [];
    
    for (let i = 0; i < names.length; i++) {
        let name = names[i].toLowerCase(); 
        let formattedName = name[0].toUpperCase() + name.slice(1);
        result.push(formattedName);
    }
    
    return result;
}


console.log(capMe(["mavis", "senaida", "letty"]));