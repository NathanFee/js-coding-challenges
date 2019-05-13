/*
Have the function checkNums take two parameters being passed and
return the bool true if num2 is greater than num1, otherwise return the bool
false.

If the parameter values are equal to each other, then return the string '-1'.
*/


const checkNums = function (num1,num2) {
  if(num1 === num2){
    return '-1'
  }
  return num2 > num1
}

module.exports = checkNums
