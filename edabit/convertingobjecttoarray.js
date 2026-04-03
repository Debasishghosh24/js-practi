
function toArray(obj) {
  let result = [];

  for (let key in obj) {
  
    result.push([key, obj[key]]);
  }

  return result;
}
console.log(toArray({ a: 1, b: 2 }))