import totalIngredientsTimeMinutes from "../../utils/totalIngredientsTimeMinutes"

const ingredientsTimesMinutes = [0, 0, 0, 1, 2, 0]

describe('Test integration of getTotalIngredientsTimeMinutesInSeconds util functions', () => {
  test('totalIngredientsTimeMinutes should return 3 as sum os all ingredients times minutes', () => {
    const expected = 3
    const totalOrderIngredientsTimeMinutes = (
      totalIngredientsTimeMinutes(ingredientsTimesMinutes)
    )

    expect(totalOrderIngredientsTimeMinutes).toBe(expected)
  })
  
})
