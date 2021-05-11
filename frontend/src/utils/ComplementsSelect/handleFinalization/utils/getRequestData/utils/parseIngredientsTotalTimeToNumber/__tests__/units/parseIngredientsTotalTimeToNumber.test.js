const ingredientsTotalTime = "115"

describe('Return received time value parsed from string to number', () => {
  test('should return 115 to "115"', () => {
    const expected = 115

    const parsedIngredientsTotalTime = Number(ingredientsTotalTime)

    expect(parsedIngredientsTotalTime).toBe(expected)
  })
})