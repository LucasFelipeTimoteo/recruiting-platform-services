const getTotalIngredientsTimeSeconds = (ingredientsTimesSeconds) => {
  const totalIngredientsTimeSeconds = ingredientsTimesSeconds.reduce(
    (total, seconds) => total + seconds, 0
  )

  return totalIngredientsTimeSeconds
}

export default getTotalIngredientsTimeSeconds