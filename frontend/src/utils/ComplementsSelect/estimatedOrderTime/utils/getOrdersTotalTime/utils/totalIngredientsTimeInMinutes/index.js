import parseNumberToMinutes from '../../../../../../GLOBAL/parseNumberToMinutes'

const totalIngredientsTimeInMinutes = (ingredientsTimes) => {
  const ingredientsTimesMinutes = ingredientsTimes.map(recipeTime => {
    const parsedNumberToMinutesString = parseNumberToMinutes(recipeTime)
    const recipeTimeSplited = parsedNumberToMinutesString.split(':')
    const recipeTimeminutes = Number(recipeTimeSplited[0])

    return recipeTimeminutes
  })

  const ingredientsTimesSecounds = ingredientsTimes.map(recipeTime => {
    const parsedNumberToSecoundsString = parseNumberToMinutes(recipeTime)
    const recipeTimeSplited = parsedNumberToSecoundsString.split(':')
    const recipeTimeSecounds = Number(recipeTimeSplited[1])

    return recipeTimeSecounds
  })

  const totalIngredientsTimeMinutes = ingredientsTimesMinutes.reduce(
    (total, secounds) => total + secounds, 0
  )
  const totalIngredientsTimeMinutesInSecounds = totalIngredientsTimeMinutes * 60
  
  const totalIngredientsTimeSecounds = ingredientsTimesSecounds.reduce(
    (total, secounds) => total + secounds, 0
  )

  const totalOrderTimeInSecounds = totalIngredientsTimeMinutesInSecounds + totalIngredientsTimeSecounds
  const totalOrderTimeInminutes = totalOrderTimeInSecounds

  return totalOrderTimeInminutes
}

export default totalIngredientsTimeInMinutes