// Complete the minimumBribes function below.

function minimumBribes(q) {
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
      if (q[i] - (i + 1) > 2) {
          return console.log("Too chaotic")
      }
      for (let j = (q[i]-1)-1; j < i; j++)
          if (q[j] > q[i]) bribes++
  }
  return console.log(bribes)
}

module.exports = minimumBribes
