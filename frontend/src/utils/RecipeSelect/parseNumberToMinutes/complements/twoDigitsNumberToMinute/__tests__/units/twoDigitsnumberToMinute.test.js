describe('Parse numbers that contains exactly 2 digits putting "0:" before it', () => {
  test('should return "0:23" for input 23', () => {
    const expected = "0:23"
    const input = 23

    const inputToString = input.toString()
    const inputParsedToMinuteArray = ["0:", ...inputToString]
    const inputParsedToMinute = inputParsedToMinuteArray.join('')

    expect(expected).toBe(inputParsedToMinute)
  })
})
