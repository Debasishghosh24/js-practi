
function evenOddTransform(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 0) {
        arr[j] -= 2;
      } else {
        arr[j] += 2;
      }
    }
  }
  return arr;
}

console.log(evenOddTransform([3, 4, 9], 3));