describe('Return the remainder of seconds convertion to minutes, that is the seconds left', () => {
  test('should return 20 seconds of 320 seconds', () => {
    const expected = 20

    const remainingTime = 320
    const rawSeconds = (remainingTime % 60)

    expect(rawSeconds).toBe(expected)
  })

  test('should return only 40 seconds of 40 seconds', () => {
    const expected = 40

    const remainingTime = 40
    const rawSeconds = (remainingTime % 60)

    expect(rawSeconds).toBe(expected)
  })
})
