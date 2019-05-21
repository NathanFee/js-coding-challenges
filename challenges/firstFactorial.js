/*
Have the function firstFactorial take the num parameter being passed and return
the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test
cases, the range will be between 1 and 8 and the input will always be an
integer.
*/


let firstFactorial = function (num) {
  for (let i = num; i !== 1; i--){
    num *= i-1
  }
  return num
}

module.exports = firstFactorial
