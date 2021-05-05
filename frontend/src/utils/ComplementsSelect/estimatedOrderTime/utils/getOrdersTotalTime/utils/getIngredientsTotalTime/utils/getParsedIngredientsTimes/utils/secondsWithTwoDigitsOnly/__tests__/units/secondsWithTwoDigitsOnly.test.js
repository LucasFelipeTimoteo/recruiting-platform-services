describe('Seconds metric should contain only 2 digits to be be in valid format', () => {
  test('should convert "300" in "30"', () => {
    const expected = "30"
    
    const totalTimeSeconds = 300
    const splitedSecounds = String(totalTimeSeconds).split('')
    splitedSecounds.length = 2

    const parsedSeconds = splitedSecounds.join('')

    expect(parsedSeconds).toBe(expected)
  })
  
})
