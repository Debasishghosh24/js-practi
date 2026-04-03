
function firstPlace(road) {

  if (road === "") return "No road available";


  for (let i = road.length - 1; i >= 0; i--) {
    let char = road[i];
    if (char !== "=") {
      return char;
    }
  }
  return "No car available";
}


console.log(firstPlace("====b===O===e===U=A==")); 
console.log(firstPlace("e==B=Fe"));                
console.log(firstPlace("proeNeoOJGnfl"));         
console.log(firstPlace("===="));                  