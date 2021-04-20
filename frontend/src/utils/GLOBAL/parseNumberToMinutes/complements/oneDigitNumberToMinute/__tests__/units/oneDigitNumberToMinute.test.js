describe('Parse numbers that contain exactly one digit putting "0:0" before it', () => {
  test('should return "0:09" for input 9', () => {
    const expected = "0:09"
    const input = 9

    const inputToString = input.toString()
    const inputParsedToMinuteArray = ["0:0", ...inputToString]
    const inputParsedToMinute = inputParsedToMinuteArray.join('')

    expect(expected).toBe(inputParsedToMinute)
  })
})
