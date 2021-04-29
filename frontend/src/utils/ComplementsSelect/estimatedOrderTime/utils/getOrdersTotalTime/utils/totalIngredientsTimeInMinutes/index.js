import getIngredientsTimesMinutes from './utils/getIngredientsTimesMinutes'
import getIngredientsTimesSeconds from './utils/getIngredientsTimesSeconds'
import getTotalIngredientsTimeMinutesInSeconds from './utils/getTotalIngredientsTimeMinutesInSeconds'
import getTotalIngredientsTimeSeconds from './utils/getTotalIngredientsTimeSeconds'

const totalIngredientsTimeInMinutes = (ingredientsTimes) => {
  const ingredientsTimesMinutes = getIngredientsTimesMinutes(ingredientsTimes)
  const ingredientsTimesSeconds = getIngredientsTimesSeconds(ingredientsTimes)

  const totalIngredientsTimeMinutesInSeconds = (
    getTotalIngredientsTimeMinutesInSeconds(ingredientsTimesMinutes)
  )

  const totalIngredientsTimeSeconds = (
    getTotalIngredientsTimeSeconds(ingredientsTimesSeconds)
  )

  const totalOrderTimeInSeconds = (
    totalIngredientsTimeMinutesInSeconds + totalIngredientsTimeSeconds
  )

  const totalOrderTimeInminutes = totalOrderTimeInSeconds

  return totalOrderTimeInminutes
}

export default totalIngredientsTimeInMinutes