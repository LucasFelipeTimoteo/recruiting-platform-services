import getIngredientsTimesMinutes from "../../utils/getIngredientsTimesMinutes"
import getIngredientsTimesSeconds from "../../utils/getIngredientsTimesSeconds"
import getTotalIngredientsTimeMinutesInSeconds from "../../utils/getTotalIngredientsTimeMinutesInSeconds"
import getTotalIngredientsTimeSeconds from "../../utils/getTotalIngredientsTimeSeconds"
import getTotalOrderTimeInSeconds from "../../utils/getTotalOrderTimeInSeconds"

const ingredientsTimes = [30, 120, 230, 25]

describe('Test integration of totalIngredientsTimeInSeconds util functions', () => {
  test('getIngredientsTimesMinutes should return the minutes part of recipe time ingredients. In this case, the serialized data will be: ("[0,1,2,0])"', () => {
    const expected = '[0,1,2,0]'

    const ingredientsTimesMinutes = getIngredientsTimesMinutes(ingredientsTimes)
    const serializedIngredientsTimesMinutes = JSON.stringify(
      ingredientsTimesMinutes
    )

    expect(serializedIngredientsTimesMinutes).toBe(expected)
  })

  test('getIngredientsTimesSeconds should return the minutes part of recipe time ingredients. In this case, the serialized data will be: ("[30,20,30,25])"', () => {
    const expected = '[30,20,30,25]'

    const ingredientsTimesSeconds = getIngredientsTimesSeconds(ingredientsTimes)
    const serializedIngredientsTimesSeconds = JSON.stringify(
      ingredientsTimesSeconds
    )

    expect(serializedIngredientsTimesSeconds).toBe(expected)
  })

  test('getTotalIngredientsTimeMinutesInSeconds should return the sum of minutes part of all selected ingredients (recipes or complements) converted in seconds. In this case, the result wiil be 90', () => {
    const expected = 180
    const ingredientsTimesMinutes = [0, 1, 2, 0]

    const totalIngredientsTimeMinutesInSeconds = (
      getTotalIngredientsTimeMinutesInSeconds(ingredientsTimesMinutes)
    )

    expect(totalIngredientsTimeMinutesInSeconds).toBe(expected)
  })

  test('getTotalIngredientsTimeSeconds should return the sum of seconds part of all selected ingredients (recipes or complements). In this case, the sesult will be 105', () => {
    const expected = 105
    const ingredientsTimesSeconds = [30, 20, 30, 25]

    const totalIngredientsTimeSeconds = (
      getTotalIngredientsTimeSeconds(ingredientsTimesSeconds)
    )

    expect(totalIngredientsTimeSeconds).toBe(expected)
  })

  test('getTotalOrderTimeInSeconds should return the sum of all seconds and all minutes parsed to seconds of all ingredients (recipes AND complements). In this case, result will be 285', () => {
    const expected = 285

    const totalIngredientsTimeMinutesInSeconds = 180
    const totalIngredientsTimeSeconds = 105

    const totalOrderTimeInSeconds = getTotalOrderTimeInSeconds(
      totalIngredientsTimeMinutesInSeconds,
      totalIngredientsTimeSeconds
    )

    expect(totalOrderTimeInSeconds).toBe(expected)
  })
})