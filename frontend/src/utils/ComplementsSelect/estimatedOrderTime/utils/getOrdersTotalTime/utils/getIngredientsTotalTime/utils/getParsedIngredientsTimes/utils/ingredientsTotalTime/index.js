const ingredientsTotalTime = (
  ingredientsTotalTimeMinutes,
  IngredientsTotalSecondsWithTwoDigitsOnly
) => {
  const orderIngredientsTotalTime = (
    `${ingredientsTotalTimeMinutes}${IngredientsTotalSecondsWithTwoDigitsOnly}`
  )

  return orderIngredientsTotalTime
}

export default ingredientsTotalTime