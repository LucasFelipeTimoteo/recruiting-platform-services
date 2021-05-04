import totalIngredientsTimeInSeconds from "../../../totalIngredientsTimeInSeconds"
const complementsTimes = [120, 30]

describe('Test integration of getRecipesTotalTimeInSeconds util functions', () => {
  test('totalIngredientsTimeInSeconds should return sum of all recipes times in seconds. In this case, result will be 150', () => {
    const expected = 110
    const recipeTimeInSeconds = totalIngredientsTimeInSeconds(complementsTimes)

    expect(recipeTimeInSeconds).toBe(expected)
  })
})

