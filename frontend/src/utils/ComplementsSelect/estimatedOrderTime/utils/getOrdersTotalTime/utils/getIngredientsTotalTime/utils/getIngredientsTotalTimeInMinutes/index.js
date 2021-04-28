const getIngredientsTotalTimeInMinutes = (allIngredientsTimesSecoundsList) => {
  const ingredientsTotalSecounds = allIngredientsTimesSecoundsList.reduce(
    (totalSecounds, ingredientSecounds) => totalSecounds + ingredientSecounds
  )
  const ingredientsTotalTimeInMinutes = ingredientsTotalSecounds / 60

  return ingredientsTotalTimeInMinutes
}

export default getIngredientsTotalTimeInMinutes