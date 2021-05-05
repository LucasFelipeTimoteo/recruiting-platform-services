import totalIngredientsTimeInSeconds from "../totalIngredientsTimeInSeconds"

const getComplementsTotalTimeInSeconds = (complementsTimes) => {
  const recipeTimeInSeconds = totalIngredientsTimeInSeconds(complementsTimes)

  return recipeTimeInSeconds
}

export default getComplementsTotalTimeInSeconds