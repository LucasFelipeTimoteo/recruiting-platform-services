import parseNumberToMinutes from "../../../../../../../../GLOBAL/parseNumberToMinutes"

const getIngredientsTimesSeconds = (ingredientsTimes) => {
  const ingredientsTimesSeconds = ingredientsTimes.map(recipeTime => {
    const parsedNumberToSecondsString = parseNumberToMinutes(recipeTime)
    const recipeTimeSplited = parsedNumberToSecondsString.split(':')
    const recipeTimeSeconds = Number(recipeTimeSplited[1])

    return recipeTimeSeconds
  })

  return ingredientsTimesSeconds
}

export default getIngredientsTimesSeconds