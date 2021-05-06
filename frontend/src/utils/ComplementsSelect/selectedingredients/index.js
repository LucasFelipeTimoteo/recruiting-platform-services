const getSelectedIngredients = (selectedRecipesList) => {
  const selectedIngredientsList = selectedRecipesList.map(recipe => {
    const selectedComplements = recipe.complements.filter(complement => complement.checked)
    const selectedIngredients = {...recipe, complements: selectedComplements}

    return selectedIngredients
  })

  return selectedIngredientsList
}

export default getSelectedIngredients