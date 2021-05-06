describe('Get a number and convert in minutes ignoring the seconds left', () => {
  test('should convert 300 seconds to 5 minutes, ignoring the 20 seconds left', () => {
    const expected = 5

    const remainingTime = 320
    const minutes = Math.floor(remainingTime / 60)

    expect(minutes).toBe(expected)
  })

  test('should convert 50 seconds to 0 minutes, ignoring the 50 seconds left', () => {
    const expected = 0

    const remainingTime = 50
    const minutes = Math.floor(remainingTime / 60)

    expect(minutes).toBe(expected)
  })
  
})
