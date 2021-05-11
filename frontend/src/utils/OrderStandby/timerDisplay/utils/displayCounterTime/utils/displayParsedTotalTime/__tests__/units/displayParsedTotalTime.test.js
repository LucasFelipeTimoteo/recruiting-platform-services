const minutes = "2"
const seconds = "45"

describe('Just concatenate minutes and seconds and add "min" in format: "MINUTES:SECONDS min"', () => {
  test('should return "2:45 min"', () => {
    const expected = "2:45 min"

    const counterTime = `${minutes}:${seconds} min`

    expect(counterTime).toBe(expected)
  })
})
