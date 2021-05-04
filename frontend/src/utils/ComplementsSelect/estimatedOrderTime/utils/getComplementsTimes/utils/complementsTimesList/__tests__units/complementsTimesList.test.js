import recipesMock from "../../../../../../../../mocks/recipes/recipes.mock"

const orderComplementsTimesList = recipesMock.map(recipe => (
  recipe.complements.map(complement => complement.time)
))

describe('Return correct data from complementsTimes', () => {
  test('should return an array', () => {
    const expected = true
    const complementsTimesListType = Array.isArray(orderComplementsTimesList)

    expect(complementsTimesListType).toBe(expected)
  })

  test('should return a array with length equals 2', () => {
    const expected = 2
    const complementsTimesListLength = orderComplementsTimesList.length

    expect(complementsTimesListLength).toBe(expected)
  })

  test('should return true if provided array only have sub-array values', () => {
    const expected = true
    const haveSomeNonArrayValue = orderComplementsTimesList.every(value => Array.isArray(value))

    expect(haveSomeNonArrayValue).toBe(expected)
  })

  test('should return serialized array with correct sub arrays: ("[[15,20,25],[15,20,40]]")', () => {
    const expected = "[[15,20,25],[15,20,40]]"
    const serializedOrderComplementsTimesList = JSON.stringify(
      orderComplementsTimesList
    )

    expect(serializedOrderComplementsTimesList).toBe(expected)
  })
})