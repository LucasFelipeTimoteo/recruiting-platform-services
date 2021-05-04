import totalIngredientsTimeInSeconds from '../totalIngredientsTimeInSeconds'

const getRecipesTotalTimeInSeconds = (recipesTimes) => {
  const recipeTimeInSecounds = totalIngredientsTimeInSeconds(recipesTimes)

  return recipeTimeInSecounds
}

export default getRecipesTotalTimeInSeconds