const ingredientsTimesSeconds = [1, 2]

describe('Return the sum of secounds of ingredients list', () => {
  test('should return 3 to sum of secounds of ingredients times secounds', () => {
    const expected = 3
    const totalIngredientsTimeSeconds = ingredientsTimesSeconds.reduce(
      (total, seconds) => total + seconds, 0
    )

    expect(totalIngredientsTimeSeconds).toBe(expected)
  })
  
})
