describe('Reapeated String:', function () {
  const repeatedString = require('../../challenges/repeatedString.js')

  const a = "abcac"
  const b = "aba"
  const c = "a"

  it('String a', function () {
    expect(repeatedString(a, 10)).toEqual(4)
  })

  it('String b', function () {
    expect(repeatedString(b, 10)).toEqual(7)
  })

  it('String c', function () {
    expect(repeatedString(c, 1000000)).toEqual(1000000)
  })
})
