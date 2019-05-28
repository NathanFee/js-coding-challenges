// Left Rotation Operation
// Input: 'a' is an integer array, 'd' is the number of left rotations
// Output: returns a new array from array a shifted d number of times to the
// left.

function rotLeft(a, d) {
  let newArray = []
  for (let i = 0; i < a.length; i++){
    let newIndex = i+d
    if (newIndex > a.length - 1) {
      newIndex = newIndex - a.length
    }
    newArray.push(a[newIndex])
  }
  return newArray
}

const a = [1, 2, 3, 4, 5]
// should return "5 1 2 3 4"
console.log("Answer", rotLeft(a,4))

module.exports = rotLeft
