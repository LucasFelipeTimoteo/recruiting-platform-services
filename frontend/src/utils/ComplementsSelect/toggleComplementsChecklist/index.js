import isTheSelectedIngredient from "./utils/isTheSelectedIngredient"

const toggleComplementsChecklist = (
  recipesChecklist,
  selectedComplement,
  currentRecipe
) => {
  const newComplementsChecklist = recipesChecklist.map(recipe => {
    if (!recipe.checked) {
      return recipe
    }

    recipe.complements.map(complement => {
      const selectedComplementIsEqualComplement = isTheSelectedIngredient(
        selectedComplement.id, complement.id
      )
      const currentRecipeIsEqualRecipe = isTheSelectedIngredient(
        recipe.id, currentRecipe.id
      )

      if (selectedComplementIsEqualComplement && currentRecipeIsEqualRecipe) {
        complement.checked = !complement.checked
      }

      return complement
    })

    return recipe
  })

  return newComplementsChecklist
}

export default toggleComplementsChecklist
