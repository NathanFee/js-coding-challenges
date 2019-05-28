describe("Find the greatest sum of the hourglass pattern in the 6x6 2D array:", function() {
  let hourGlass = require('../../challenges/hourGlass.js')


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


  it("Return the greatest sum of values with an hourglass pattern of array A", function() {
    expect(hourGlass(A)).toEqual(7)
  })

  it("Return the greatest sum of values with an hourglass pattern of array B", function() {
    expect(hourGlass(B)).toEqual(28)
  })

  it("Return the greatest sum of values with an hourglass pattern of array C", function() {
    expect(hourGlass(C)).toEqual(19)
  })
})
