describe('Parse numbers that contains 3 or more digits putting ":" before the two last numbers', () => {
  test('should return "2:30" for input 230', () => {
    const expected = '2:30'
    const input = 230

    const inputToString = input.toString()
    const inputParsedToArray = inputToString.split('')

    // not in const because slice modifies the array, but not return the modified array
    inputParsedToArray.splice(-2, 0, ":") 
    const inputParsedToMinute = inputParsedToArray.join('')

    expect(expected).toBe(inputParsedToMinute)
  })
})