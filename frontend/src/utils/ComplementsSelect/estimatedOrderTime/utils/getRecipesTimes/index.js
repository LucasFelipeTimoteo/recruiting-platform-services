const getRecipesTimes = (orders) => (
  orders.map(recipe => recipe.time)
)

export default getRecipesTimes