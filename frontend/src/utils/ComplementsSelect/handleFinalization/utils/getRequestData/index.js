import complementsRequest from "./utils/complementsRequest"
import ingredientsRequest from "./utils/ingredientsRequest"
import recipesRequest from "./utils/recipesRequest"
import requestFinalData from "./utils/requestFinalData"
import parseIngredientsTotalTimeToNumber from './utils/parseIngredientsTotalTimeToNumber'

const getRequestData = (orders, user, ingredientsTotalTime) => {
  const parsedRecipesRequest = recipesRequest(orders)

  const parsedComplementsRequest = complementsRequest(orders)

  const parsedIngredientsRequest = ingredientsRequest(
    parsedRecipesRequest,
    parsedComplementsRequest
  )
  
  const parsedIngredientsTotalTime = parseIngredientsTotalTimeToNumber(
    ingredientsTotalTime
  )

  const requestData = requestFinalData(
    user,
    parsedIngredientsRequest,
    parsedIngredientsTotalTime
  )

  return requestData
}

export default getRequestData