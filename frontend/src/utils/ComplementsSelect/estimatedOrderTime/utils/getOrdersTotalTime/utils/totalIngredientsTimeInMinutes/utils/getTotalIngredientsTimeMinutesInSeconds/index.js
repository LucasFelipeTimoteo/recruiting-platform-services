const getTotalIngredientsTimeMinutesInSeconds = (ingredientsTimesMinutes) => {
  const totalIngredientsTimeMinutes = ingredientsTimesMinutes.reduce(
    (total, seconds) => total + seconds, 0
  )
  const totalIngredientsTimeMinutesInSeconds = totalIngredientsTimeMinutes * 60

  return totalIngredientsTimeMinutesInSeconds
}

export default getTotalIngredientsTimeMinutesInSeconds