import totalIngredientsTimeInSeconds from "../../../totalIngredientsTimeInSeconds"
const complementsTimes = [30, 90, 20, 30]

describe('Test the integration of getComplementsTotalTimeInSeconds util functions', () => {
  test('totalIngredientsTimeInSeconds should return sum of all complements times in seconds. In this case, result will be 170', () => {
    const expected = 170
    const recipeTimeInSeconds = totalIngredientsTimeInSeconds(complementsTimes)

    expect(recipeTimeInSeconds).toBe(expected)
  })
})
