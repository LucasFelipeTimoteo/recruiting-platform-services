const requestFinalData = (
  user,
  parsedIngredientsRequest,
  parsedIngredientsTotalTime
) => {
  const requestData = {
    user_id: user,
    orders: {
      totalTime: parsedIngredientsTotalTime,
      recipes: parsedIngredientsRequest
    }
  }

  return requestData
}

export default requestFinalData