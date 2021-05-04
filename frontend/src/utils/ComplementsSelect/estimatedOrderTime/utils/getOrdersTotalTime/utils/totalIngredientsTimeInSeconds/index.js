import getIngredientsTimesMinutes from './utils/getIngredientsTimesMinutes'
import getIngredientsTimesSeconds from './utils/getIngredientsTimesSeconds'
import getTotalIngredientsTimeMinutesInSeconds from './utils/getTotalIngredientsTimeMinutesInSeconds'
import getTotalIngredientsTimeSeconds from './utils/getTotalIngredientsTimeSeconds'
import getTotalOrderTimeInSeconds from './utils/getTotalOrderTimeInSeconds'

const totalIngredientsTimeInSeconds = (ingredientsTimes) => {
  const ingredientsTimesMinutes = getIngredientsTimesMinutes(ingredientsTimes)
  const ingredientsTimesSeconds = getIngredientsTimesSeconds(ingredientsTimes)

  const totalIngredientsTimeMinutesInSeconds = (
    getTotalIngredientsTimeMinutesInSeconds(ingredientsTimesMinutes)
  )

  const totalIngredientsTimeSeconds = (
    getTotalIngredientsTimeSeconds(ingredientsTimesSeconds)
  )

  const totalOrderTimeInSeconds = getTotalOrderTimeInSeconds(
    totalIngredientsTimeMinutesInSeconds,
    totalIngredientsTimeSeconds
  )

  return totalOrderTimeInSeconds
}

export default totalIngredientsTimeInSeconds