/*
Have the function letterCapitalize take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one
space.
*/

// let letterCapitalize = function (str) {
//   let words = str.split(' ')
//   let capitalized = words.map( word => {
//     let chars = word.split('')
//     chars[0] = chars[0].toUpperCase()
//     return chars.join('')
//   })
//   return capitalized.join(' ')
// }

let letterCapitalize = function (str) {
  let words = str.split(' ')
  let capitalizeFirst = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  return capitalizeFirst.join(' ')
}

module.exports = letterCapitalize
