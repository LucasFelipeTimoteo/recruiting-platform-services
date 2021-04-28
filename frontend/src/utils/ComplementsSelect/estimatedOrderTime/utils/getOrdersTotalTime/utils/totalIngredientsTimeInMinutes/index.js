import parseNumberToMinutes from '../../../../../../GLOBAL/parseNumberToMinutes'

const totalIngredientsTimeInMinutes = (ingredientsTimes) => {
  const ingredientsTimesMinutes = ingredientsTimes.map(recipeTime => {
    const parsedNumberToMinutesString = parseNumberToMinutes(recipeTime)
    const recipeTimeSplited = parsedNumberToMinutesString.split(':')
    const recipeTimeminutes = Number(recipeTimeSplited[0])

    return recipeTimeminutes
  })

  const ingredientsTimesSeconds = ingredientsTimes.map(recipeTime => {
    const parsedNumberToSecondsString = parseNumberToMinutes(recipeTime)
    const recipeTimeSplited = parsedNumberToSecondsString.split(':')
    const recipeTimeSeconds = Number(recipeTimeSplited[1])

    return recipeTimeSeconds
  })

  const totalIngredientsTimeMinutes = ingredientsTimesMinutes.reduce(
    (total, seconds) => total + seconds, 0
  )
  const totalIngredientsTimeMinutesInSeconds = totalIngredientsTimeMinutes * 60
  
  const totalIngredientsTimeSeconds = ingredientsTimesSeconds.reduce(
    (total, seconds) => total + seconds, 0
  )

  const totalOrderTimeInSeconds = totalIngredientsTimeMinutesInSeconds + totalIngredientsTimeSeconds
  const totalOrderTimeInminutes = totalOrderTimeInSeconds

  return totalOrderTimeInminutes
}

export default totalIngredientsTimeInMinutes