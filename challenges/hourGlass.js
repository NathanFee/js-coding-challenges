// Given a 6x6 2D array. Find the hourglass pattern that has the greatest sum.

const hourGlass = (A) => {
  let maxSumHourGlass = A[0][0] + A[0][1] + A[0][2] + A[1][1] + A[2][0] + A[2][1] + A[2][2]

  for(let i = 0; i < A.length/2 + 1 ; i++){
    for(let j = 0; j < A.length/2 + 1; j++){
            let currHourGlassSum = A[i][j] + A[i][j+1] + A[i][j+2] + A[i+1][j+1] + A[i+2][j] + A[i+2][j+1] + A[i+2][j+2]
            if (currHourGlassSum > maxSumHourGlass){
              maxSumHourGlass = currHourGlassSum
            }
    }
  }
  return maxSumHourGlass
}

const A = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
          ];

const B = [
          [-9, -9, -9,  1, 1, 1],
          [ 0, -9,  0,  4, 3, 2],
          [-9, -9, -9,  1, 2, 3],
          [ 0,  0,  8,  6, 6, 0],
          [ 0,  0,  0, -2, 0, 0],
          [ 0,  0,  1,  2, 4, 0]
          ];

const C = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
          ];

console.log("Answer A:", hourGlass(A))
console.log("Answer B:", hourGlass(B))
console.log("Answer C:", hourGlass(C))

module.exports = hourGlass
