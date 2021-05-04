const getTotalOrderTimeInSeconds = (
  totalIngredientsTimeMinutesInSeconds,
  totalIngredientsTimeSeconds
) => {
  const totalOrderTimeInSeconds = (
    totalIngredientsTimeMinutesInSeconds + totalIngredientsTimeSeconds
  )

  return totalOrderTimeInSeconds
}

export default getTotalOrderTimeInSeconds