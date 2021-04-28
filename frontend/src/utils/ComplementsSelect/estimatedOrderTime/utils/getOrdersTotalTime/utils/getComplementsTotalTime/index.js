import totalIngredientsTimeInMinutes from "../totalIngredientsTimeInMinutes"

const getComplementsTotalTime = (complementsTimes) => {
  const recipeTimeInSecounds = totalIngredientsTimeInMinutes(complementsTimes)

  return recipeTimeInSecounds
}

export default getComplementsTotalTime