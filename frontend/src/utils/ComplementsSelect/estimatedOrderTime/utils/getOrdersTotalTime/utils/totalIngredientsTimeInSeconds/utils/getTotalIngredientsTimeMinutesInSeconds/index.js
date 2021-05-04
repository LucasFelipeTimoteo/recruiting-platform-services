import totalIngredientsTimeMinutesInSeconds from "./utils/totalIngredientsTimeMinutesInSeconds"
import totalIngredientsTimeMinutes from "./utils/totalIngredientsTimeMinutes"

const getTotalIngredientsTimeMinutesInSeconds = (ingredientsTimesMinutes) => {
  const totalOrderIngredientsTimeMinutes = (
    totalIngredientsTimeMinutes(ingredientsTimesMinutes)
  )

  const totalOrderIngredientsTimeMinutesInSeconds = (
    totalIngredientsTimeMinutesInSeconds(totalOrderIngredientsTimeMinutes)
  )
  
  return totalOrderIngredientsTimeMinutesInSeconds
}

export default getTotalIngredientsTimeMinutesInSeconds