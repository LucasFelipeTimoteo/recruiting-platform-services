//change function name to parseDecimalMinutesInSeconds

import ingredientsTotalTimeParts from "./utils/ingredientsTotalTimeParts"
import parseFloatMinutesToSeconds from "./utils/parseFloatMinutesToSeconds"
import secondsWithTwoDigitsOnly from "./utils/secondsWithTwoDigitsOnly"
import ingredientsTotalTime from "./utils/ingredientsTotalTime"

const getParsedIngredientsTimes = (ingredientsTotalTimeInMinutes) => {
  const { ingredientsTotalTimeMinutes, ingredientsTotalTimeSeconds } = (
    ingredientsTotalTimeParts(ingredientsTotalTimeInMinutes)
  )

  const parsedOrderFloatMinutesToSeconds = parseFloatMinutesToSeconds(
    ingredientsTotalTimeSeconds
  )

  const IngredientsTotalSecondsWithTwoDigitsOnly = secondsWithTwoDigitsOnly(
    parsedOrderFloatMinutesToSeconds
  )

  const orderIngredientsTotalTime = ingredientsTotalTime(
    ingredientsTotalTimeMinutes,
    IngredientsTotalSecondsWithTwoDigitsOnly
  )

  return orderIngredientsTotalTime
}

export default getParsedIngredientsTimes