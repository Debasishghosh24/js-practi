
// const Score = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]


// let store = 0
// for(let i=0; i<Score.length; i++) {
//     store = store + Score[i].score;

// }
// console.log(store);

function maximumScore(tileHand){

    let store = 0;

    for(let i=0; i<tileHand.length; i++) {
        store = store + tileHand[i].score;
    }
    return store;
}

console.log(maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]))

