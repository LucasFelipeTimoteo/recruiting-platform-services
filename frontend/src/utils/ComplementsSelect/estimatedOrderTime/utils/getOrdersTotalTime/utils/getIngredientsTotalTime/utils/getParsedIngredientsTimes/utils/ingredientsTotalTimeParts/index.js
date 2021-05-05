const ingredientsTotalTimeParts = (ingredientsTotalTimeInMinutes) => {
  const ingredientsTotalTimeInMinutesSplited = String(
    ingredientsTotalTimeInMinutes
  ).split('.')

  const ingredientsTotalTimeMinutes = ingredientsTotalTimeInMinutesSplited[0]
  const ingredientsTotalTimeSeconds = (
    ingredientsTotalTimeInMinutesSplited[1]
  )

  return {
    ingredientsTotalTimeMinutes,
    ingredientsTotalTimeSeconds
  }
}

export default ingredientsTotalTimeParts