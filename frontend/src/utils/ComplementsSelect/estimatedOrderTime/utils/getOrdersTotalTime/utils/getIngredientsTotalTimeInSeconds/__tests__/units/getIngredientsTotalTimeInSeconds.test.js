const allIngredientsTimesSecondsList = [250, 60]

const getIngredientsTotalTimeInSeconds = (allIngredientsTimesSecondsList) => {
  const ingredientsTotalTimeInSeconds = allIngredientsTimesSecondsList.reduce(
    (totalSeconds, seconds) => totalSeconds + seconds
  )

  return ingredientsTotalTimeInSeconds
}

describe('Return the sum of seconds of all ingredients ', () => {
  test('should return 310', () => {
    const expected = 310

    const ingredientsTotalTimeInSeconds = getIngredientsTotalTimeInSeconds(
      allIngredientsTimesSecondsList
    )

    expect(ingredientsTotalTimeInSeconds).toBe(expected)
  })
})
