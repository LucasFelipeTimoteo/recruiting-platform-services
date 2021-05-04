const timeInMinutesIsInteger = (ingredientsTotalTimeInMinutes) => {
  const minutesIsInteger = Number.isInteger(ingredientsTotalTimeInMinutes)

  return minutesIsInteger
}

export default timeInMinutesIsInteger