const selectedingredients = (selectedRecipesList) => {
  const selectedIngredients = selectedRecipesList.map(recipe => {
    const selectedComplements = recipe.complements.filter(complement => complement.checked)
    const selectedIngredients = {...recipe, complements: selectedComplements}

    return selectedIngredients
  })

  return selectedIngredients
}

export default selectedingredients