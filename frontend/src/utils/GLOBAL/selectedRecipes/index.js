const selectedRecipes = (ingredientsChecklist) => (
  ingredientsChecklist.filter(recipe => recipe.checked)
)

export default selectedRecipes