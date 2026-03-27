function findLargestNums(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    
    let groupMax = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > groupMax) {
        groupMax = arr[i][j];
      }
    }
    results.push(groupMax);
  }

  return results;
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); 
