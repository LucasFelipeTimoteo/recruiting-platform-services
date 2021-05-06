import getComplementsTotalTimeInSeconds from "./utils/getComplementsTotalTimeInSeconds"
import getRecipesTotalTimeInSeconds from "./utils/getRecipesTotalTimeInSeconds"
import getIngredientsTotalTime from "./utils/getIngredientsTotalTime"
import getIngredientsTotalTimeInSeconds from "./utils/getIngredientsTotalTimeInSeconds"

const getOrdersTotalTime = (recipesTimes, complementsTimes) => {
  const recipesTotalTimeInSeconds = getRecipesTotalTimeInSeconds(recipesTimes)
  const complementsTotalTimeInSeconds = getComplementsTotalTimeInSeconds(
    complementsTimes
  )

  const allIngredientsTimesSecondsList = [
    recipesTotalTimeInSeconds,
    complementsTotalTimeInSeconds
  ]

  const ingredientsTotalTime = getIngredientsTotalTime(
    allIngredientsTimesSecondsList
  )
  const ingredientsTotalTimeInSeconds = getIngredientsTotalTimeInSeconds(
    allIngredientsTimesSecondsList
  )

  return {
    ingredientsTotalTime,
    ingredientsTotalTimeInSeconds
  }
}

export default getOrdersTotalTime