import recipesMock from "../../../../../../../mocks/recipes/recipes.mock"
import complementsTimes from "../../utils/complementsTimes"
import complementsTimesList from "../../utils/complementsTimesList"

describe('Test integration with util functions', () => {
  test('complementsTimesList should return this a array of arrays: ("[[15,20,25],[15,20,40]]") ', () => {
    const expected = "[[15,20,25],[15,20,40]]"

    const orderComplementsTimesList = complementsTimesList(recipesMock)
    const serializedOrderComplementsTimesList = JSON.stringify(
      orderComplementsTimesList
    )

    expect(serializedOrderComplementsTimesList).toBe(expected)
  })

  test('should return a flatted array with this structure: "[15,20,25,15,20,40]"', () => {
    const expected = "[15,20,25,15,20,40]"

    const orderComplementsTimesList = [[15, 20, 25], [15, 20, 40]]
    const ordercomplementsTimes = complementsTimes(orderComplementsTimesList)
    const serializedOrdercomplementsTimes = JSON.stringify(ordercomplementsTimes)

    expect(serializedOrdercomplementsTimes).toBe(expected)
  })
})
