
function calculateLosses(obj) {
  let total = 0;
  let hasItems = false;

  for (let item in obj) {
    total += obj[item];
    hasItems = true; 
  }
  return hasItems ? total : "Lucky you!";
}

