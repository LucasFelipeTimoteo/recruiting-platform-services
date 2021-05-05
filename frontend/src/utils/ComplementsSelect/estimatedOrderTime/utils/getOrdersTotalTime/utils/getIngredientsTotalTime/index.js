import getIngredientsTotalTimeInMinutes from './utils/getIngredientsTotalTimeInMinutes'
import getParsedIngredientsTimes from './utils/getParsedIngredientsTimes'
import timeInMinutesIsInteger from './utils/timeInMinutesIsInteger'

const getIngredientsTotalTime = (allIngredientsTimesSecondsList) => {
  const ingredientsTotalTimeInMinutes = getIngredientsTotalTimeInMinutes(
    allIngredientsTimesSecondsList
  )

  const minutesIsInteger = timeInMinutesIsInteger(ingredientsTotalTimeInMinutes)
  if (minutesIsInteger) {
    return ingredientsTotalTimeInMinutes
  }

  const ingredientsTotalTime = getParsedIngredientsTimes(
    ingredientsTotalTimeInMinutes
  )

  return ingredientsTotalTime
}

export default getIngredientsTotalTime