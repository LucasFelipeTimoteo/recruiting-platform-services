import getComplementsTotalTimeInSeconds from "./utils/getComplementsTotalTimeInSeconds"
import getRecipesTotalTimeInSeconds from "./utils/getRecipesTotalTimeInSeconds"
import getIngredientsTotalTime from "./utils/getIngredientsTotalTime"
import parseNumberToMinutes from "../../../../GLOBAL/parseNumberToMinutes"

const getOrdersTotalTime = (recipesTimes, complementsTimes) => {
  const recipesTotalTimeInSeconds = getRecipesTotalTimeInSeconds(recipesTimes)
  const complementsTotalTimeInSeconds = getComplementsTotalTimeInSeconds(complementsTimes)
  
  const allIngredientsTimesSecondsList = [recipesTotalTimeInSeconds, complementsTotalTimeInSeconds]
  const ingredientsTotalTime = getIngredientsTotalTime(allIngredientsTimesSecondsList)

  const isMinuteInteger = Number.isInteger(ingredientsTotalTime)
  const parsedIngredientsTotalTime = parseNumberToMinutes(ingredientsTotalTime, isMinuteInteger)

  return parsedIngredientsTotalTime
}

export default getOrdersTotalTime