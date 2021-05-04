const ingredientsTimesMinutes = [0, 2, 1]

const totalOrderIngredientsTimeMinutes = ingredientsTimesMinutes.reduce(
  (total, seconds) => total + seconds, 0
)

describe('Return correct data to totalIngredientsTimeMinutes', () => {
  test('should return a interger number as a data type', () => {
    const expected = true

    const totalOrderIngredientsTimeMinutesIsInteger = Number.isInteger(
      totalOrderIngredientsTimeMinutes
    )

    expect(totalOrderIngredientsTimeMinutesIsInteger).toBe(expected)
  })

  test('should return 3 as result of sum of ingredientsTimesMinutes values', () => {
    const expected = 3

    expect(totalOrderIngredientsTimeMinutes).toBe(expected)
  })
})
