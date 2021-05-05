const allIngredientsTimesSecoundsList = [90, 55]

describe('Return the correct array length, once it should be only the sum os all minutes (parsed to seconds) and sum os all seconds', () => {
  test('should return 2 to length of allIngredientsTimesSecoundsList', () => {
    const expected = 2

    const allIngredientsTimesSecoundsListLength = (
      allIngredientsTimesSecoundsList.length
    )

    expect(allIngredientsTimesSecoundsListLength).toBe(expected)
  })
})

describe('Return total time in seconds added parsed in minutes', () => {
  test('should return 2.4166666666666665 as result of conversion', () => {
    const expected = 2.4166666666666665

    const ingredientsTotalSecounds = allIngredientsTimesSecoundsList.reduce(
      (totalSecounds, ingredientSecounds) => totalSecounds + ingredientSecounds
    )
    const ingredientsTotalTimeInMinutes = ingredientsTotalSecounds / 60

    expect(ingredientsTotalTimeInMinutes).toBe(expected)
  })

})
