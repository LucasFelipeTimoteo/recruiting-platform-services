import getComplementsTimes from "./utils/getComplementsTimes"
import getOrdersTotalTime from "./utils/getOrdersTotalTime"
import getRecipesTimes from "./utils/getRecipesTimes"

const estimatedOrderTime = (orders) => {
  const recipesTimes = getRecipesTimes(orders)
  const complementsTimes = getComplementsTimes(orders)
  const ordersTotalTime = getOrdersTotalTime(recipesTimes, complementsTimes)

  return ordersTotalTime
}

export default estimatedOrderTime