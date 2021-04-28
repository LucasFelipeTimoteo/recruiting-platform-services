import totalIngredientsTimeInMinutes from '../totalIngredientsTimeInMinutes'

const getRecipesTotalTime = (recipesTimes) => {
  const recipeTimeInSecounds = totalIngredientsTimeInMinutes(recipesTimes)

  return recipeTimeInSecounds
}

export default getRecipesTotalTime