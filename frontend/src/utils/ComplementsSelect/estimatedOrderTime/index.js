import getComplementsTimes from "./utils/getComplementsTimes"
import getOrdersTotalTime from "./utils/getOrdersTotalTime"
import getRecipesTimes from "./utils/getRecipesTimes"

const estimatedOrderTime = (orders) => {
  const recipesTimes = getRecipesTimes(orders)
  const complementsTimes = getComplementsTimes(orders)
  const {
    ingredientsTotalTime,
    ingredientsTotalTimeInSeconds
  } = getOrdersTotalTime(recipesTimes, complementsTimes)

  return {
    ingredientsTotalTime,
    ingredientsTotalTimeInSeconds
  }
}

export default estimatedOrderTime