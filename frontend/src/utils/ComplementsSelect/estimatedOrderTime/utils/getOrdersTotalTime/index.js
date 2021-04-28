import getComplementsTotalTime from "./utils/getComplementsTotalTime"
import getRecipesTotalTime from "./utils/getRecipesTotalTime"
import getIngredientsTotalTime from "./utils/getIngredientsTotalTime"
import parseNumberToMinutes from "../../../../GLOBAL/parseNumberToMinutes"

const getOrdersTotalTime = (recipesTimes, complementsTimes) => {
  const recipesTotalTime = getRecipesTotalTime(recipesTimes)
  const complementsTotalTime = getComplementsTotalTime(complementsTimes)
  
  const allIngredientsTimesSecoundsList = [recipesTotalTime, complementsTotalTime]
  const ingredientsTotalTime = getIngredientsTotalTime(allIngredientsTimesSecoundsList)

  const isMinuteInteger = Number.isInteger(ingredientsTotalTime)
  const parsedIngredientsTotalTime = parseNumberToMinutes(ingredientsTotalTime, isMinuteInteger)

  return parsedIngredientsTotalTime
}

export default getOrdersTotalTime