describe('Rotate Left:', function () {
  const rotLeft = require('../../challenges/rotLeft.js')

  const a = [1, 2, 3, 4, 5]

  it('Rotate a left d times', function () {
    expect(rotLeft(a, 4)).toEqual([5, 1, 2, 3, 4])
  })

  it('Rotate a left d times', function () {
    expect(rotLeft(a, 2)).toEqual([3, 4, 5, 1, 2])
  })
})
