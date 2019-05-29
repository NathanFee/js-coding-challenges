describe('Minimum Bribes:', function () {
  const minimumBribes = require('../../challenges/minimumBribes.js')

  const q1 = [2, 1, 5, 3, 4]
  const q2 = [2, 5, 1, 3, 4]
  const q3 = [1, 2, 3, 5, 4, 6, 7, 8]

  it('Expected the min bribe to return', function () {
    expect(minimumBribes(q1)).toEqual(3)
  })

  it('Expected the min bribe to return', function () {
    expect(minimumBribes(q2)).toEqual("Too chaotic")
  })

  it('Expected the min bribe to return', function () {
    expect(minimumBribes(q3)).toEqual(1)
  })
})
