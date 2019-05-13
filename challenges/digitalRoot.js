/*
A digital root is the recursive sum of all the digits in a number.

Have the function digitalRoot take a number as an argument and return the sum.
If that value has two digits, continue reducing in this way until a single-digit
number is produced. This is only applicable to the natural numbers.

Examples:
16 =
1 + 6
7

942 =
= 9 + 4 + 2
= 15 ...
= 1 + 5
6
*/


let digitalRoot = (n) => {
  // turn the number into an array of characters
  let chars = n.toString().split('')
  // if the length of the array is one, we're done return the number
  if (chars.length === 1){
    return n
  }
  // else we're not done, change the chars to nums and sum numbers
  let nums = chars.map(x => parseInt(x))
  let reducedSum = nums.reduce((acc,curr) => acc + curr)
  // call this function using the reduced sum
  return digitalRoot(reducedSum)
}

module.exports = digitalRoot
