import alreadyChecked from './complements/alreadyChecked'
import notSelected from './complements/notSelected'
import checkingButLimitReached from './complements/checkButLimitReached'
import limitNotReached from './complements/limitNotReached'

const toggleRecipeCheckbox = (
  recipesChecklist,
  selectedRecipe,
  allowMoreChecks
) => {
  const newChecklist = recipesChecklist.map(recipe => {
    const recipeNotSelected = notSelected(recipe, selectedRecipe)
    const recipeIsAlreadyChecked = alreadyChecked(recipe)
    const recipeLimitNotReached = limitNotReached(allowMoreChecks)
    const checkingRecipeButLimitReached = checkingButLimitReached(
      recipe,
      allowMoreChecks
    )

    if (recipeNotSelected || checkingRecipeButLimitReached) {
      return recipe
    }

    if (recipeLimitNotReached || recipeIsAlreadyChecked) {
      recipe.checked = !recipe.checked
    }

    return recipe
  })

  return newChecklist
}

export default toggleRecipeCheckbox
