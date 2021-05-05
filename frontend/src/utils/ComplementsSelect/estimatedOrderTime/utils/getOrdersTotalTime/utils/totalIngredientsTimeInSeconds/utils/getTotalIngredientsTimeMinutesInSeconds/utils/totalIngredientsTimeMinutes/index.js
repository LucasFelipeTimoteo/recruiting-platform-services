const totalIngredientsTimeMinutes = (ingredientsTimesMinutes) => {
  const totalOrderIngredientsTimeMinutes = ingredientsTimesMinutes.reduce(
    (total, seconds) => total + seconds, 0
  )

  return totalOrderIngredientsTimeMinutes
}

export default totalIngredientsTimeMinutes