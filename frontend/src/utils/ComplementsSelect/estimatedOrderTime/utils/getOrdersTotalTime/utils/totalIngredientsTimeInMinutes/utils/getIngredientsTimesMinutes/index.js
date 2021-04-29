import parseNumberToMinutes from "../../../../../../../../GLOBAL/parseNumberToMinutes"

const getIngredientsTimesMinutes = (ingredientsTimes) => {
  const ingredientsTimesMinutes = ingredientsTimes.map(recipeTime => {
    const parsedNumberToMinutesString = parseNumberToMinutes(recipeTime)
    const recipeTimeSplited = parsedNumberToMinutesString.split(':')
    const recipeTimeminutes = Number(recipeTimeSplited[0])

    return recipeTimeminutes
  })

  return ingredientsTimesMinutes
}

export default getIngredientsTimesMinutes