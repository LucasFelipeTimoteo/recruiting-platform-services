import getIngredientsTotalTimeInMinutes from './utils/getIngredientsTotalTimeInMinutes'
import getParsedIngredientsTimes from './utils/getParsedIngredientsTimes'

const getIngredientsTotalTime = (allIngredientsTimesSecoundsList) => {
  const ingredientsTotalTimeInMinutes = getIngredientsTotalTimeInMinutes(
    allIngredientsTimesSecoundsList
  )

  const isInteger = Number.isInteger(ingredientsTotalTimeInMinutes)
  if (isInteger) {
    return ingredientsTotalTimeInMinutes
  }

  const [
    ingredientsTotalTimeMinutes,
    parsedSecounds
  ] = getParsedIngredientsTimes(ingredientsTotalTimeInMinutes)

  const ingredientsTotalTime = `${ingredientsTotalTimeMinutes}${parsedSecounds}`

  return ingredientsTotalTime
}

export default getIngredientsTotalTime