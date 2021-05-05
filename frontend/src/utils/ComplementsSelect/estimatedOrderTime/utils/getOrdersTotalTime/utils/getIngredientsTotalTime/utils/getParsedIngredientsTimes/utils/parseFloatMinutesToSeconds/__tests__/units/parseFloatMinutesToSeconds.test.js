describe('Return decimal minutes parsed into valid seconds, once decimal minutes do not use same digits as seconds metric. For example: 0.5 min === 30 sec', () => {
  test('should convert 0.5 in 30', () => {
    const expected = 30

    const parseIngredientsTotalTimeSecondsNumberToDecimal = 0.5
    const parsedOrderFloatMinutesToSeconds = (
      Math.ceil(parseIngredientsTotalTimeSecondsNumberToDecimal * 60)
    )

    expect(parsedOrderFloatMinutesToSeconds).toBe(expected)
  })

  test('should convert 0.16 in 10', () => {
    const expected = 10

    const parseIngredientsTotalTimeSecondsNumberToDecimal = 0.16
    const parsedOrderFloatMinutesToSeconds = (
      Math.ceil(parseIngredientsTotalTimeSecondsNumberToDecimal * 60)
    )

    expect(parsedOrderFloatMinutesToSeconds).toBe(expected)
  })

})
