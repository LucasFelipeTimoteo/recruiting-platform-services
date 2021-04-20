const notSelected = (recipe, selectedRecipe) => (
  recipe.id !== selectedRecipe.id ? true : false
)

export default notSelected