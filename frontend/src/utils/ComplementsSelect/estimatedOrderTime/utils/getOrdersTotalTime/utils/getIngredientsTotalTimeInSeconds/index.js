const getIngredientsTotalTimeInSeconds = (allIngredientsTimesSecondsList) => {
  const ingredientsTotalTimeInSeconds = allIngredientsTimesSecondsList.reduce(
    (totalSeconds, seconds) => totalSeconds + seconds
  )

  return ingredientsTotalTimeInSeconds
}

export default getIngredientsTotalTimeInSeconds