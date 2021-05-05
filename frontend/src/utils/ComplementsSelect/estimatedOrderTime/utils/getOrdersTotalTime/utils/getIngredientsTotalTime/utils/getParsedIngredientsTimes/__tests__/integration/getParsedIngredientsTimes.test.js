import ingredientsTotalTime from "../../utils/ingredientsTotalTime"
import ingredientsTotalTimeParts from "../../utils/ingredientsTotalTimeParts"
import parseFloatMinutesToSeconds from "../../utils/parseFloatMinutesToSeconds"
import secondsWithTwoDigitsOnly from "../../utils/secondsWithTwoDigitsOnly"

const ingredientsTotalTimeInMinutes = 1.666666666
const ingredientsTotalTimeSeconds = '666666666'
const parsedOrderFloatMinutesToSeconds = '35555'

const ingredientsTotalTimeMinutes = "1"
const IngredientsTotalSecondsWithTwoDigitsOnly = "16"

describe('test getParsedIngredientsTimes util functions integration', () => {
  describe('ingredientsTotalTimeParts should return an object with 2 values: ingredientsTotalTimeMinutes (minutes part of input) and ingredientsTotalTimeSeconds (parsed seconds part)', () => {
    test('should return "1" to 1.666666666', () => {
      const expected = "1"

      const { ingredientsTotalTimeMinutes } = (
        ingredientsTotalTimeParts(ingredientsTotalTimeInMinutes)
      )

      expect(ingredientsTotalTimeMinutes).toBe(expected)
    })

    test('should return "666666666" to 1.666666666', () => {
      const expected = "666666666" 
      const { ingredientsTotalTimeSeconds } = (
        ingredientsTotalTimeParts(ingredientsTotalTimeInMinutes)
      )

      expect(ingredientsTotalTimeSeconds).toBe(expected)
    })
  })
  
  test('parsedOrderFloatMinutesToSeconds should return 17 to 666666666', () => {
    const expected = '40'

    const parsedOrderFloatMinutesToSeconds = parseFloatMinutesToSeconds(
      ingredientsTotalTimeSeconds
    )

    expect(parsedOrderFloatMinutesToSeconds).toBe(expected)
  })
  
  test('secondsWithTwoDigitsOnly should return "35" to "35555"', () => {
    const expected = "35"

    const IngredientsTotalSecondsWithTwoDigitsOnly = secondsWithTwoDigitsOnly(
      parsedOrderFloatMinutesToSeconds
    )

    expect(IngredientsTotalSecondsWithTwoDigitsOnly).toBe(expected)
  })
  
  test('ingredientsTotalTime should', () => {
    const expected = "116"

    const orderIngredientsTotalTime = ingredientsTotalTime(
      ingredientsTotalTimeMinutes,
      IngredientsTotalSecondsWithTwoDigitsOnly
    )
  
    expect(orderIngredientsTotalTime).toBe(expected)
  })
  
})
