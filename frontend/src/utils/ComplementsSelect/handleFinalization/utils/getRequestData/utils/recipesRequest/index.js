const recipesRequest = (orders) => {
  const parsedRecipesRequest = orders.map(recipe => (
    { recipe_id: recipe.id }
  ))

  return parsedRecipesRequest
}

export default recipesRequest