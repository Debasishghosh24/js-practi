
// const matrix = [[1,0], [0,0]]

// let store = 0;

// for(let i=0; i<matrix.length; i++) {
//     for(let j=0; j<matrix[i].length; j++) {
//         if(matrix[i][j] === 1){
//             store++;
//         }
//     }
// }
// console.log(store);

function countOnes(matrix) {
    let store = 0;
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(matrix[i][j]=== 1){
                store++;
            }
        }
    }
    return store;
}
console.log(countOnes([
  [1, 0],
  [0, 0]
]));
console.log(countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]));
console.log(countOnes([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
]));