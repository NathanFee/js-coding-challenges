/*
Have the function firstReverse take the str parameter being passed and
return the string in reversed order. For example: if the input string is
"Hello World and Coders" then your program should return the string "sredoC
dna dlroW olleH".
*/

// let firstReverse = function (str) {
//   let reversedString = ''
//   for(let i = str.length - 1; i >= 0; i--){
//     reversedString += str[i]
//   }
//   return reversedString
// }

function firstReverse(str){
   return str.split("").reduce((revString, char)=> char + revString, "");
}

module.exports = firstReverse
