import { useEffect, useState } from 'react'
import toggleRecipeCheckbox from '../../utils/GLOBAL/toggleRecipeCheckbox'

export default function useRecipesChecklist(recipes) {
  const [recipesChecklist, setRecipesCheckList] = useState([])

  useEffect(() => {
    const checklist = recipes?.map(recipe => (
      { ...recipe, checked: false }
    ))

    setRecipesCheckList(checklist)
  }, [recipes])

  const handleRecipeChecklist = (selectedRecipe) => {
    const checkedRecipes = recipesChecklist.filter(recipe => recipe.checked)
    const allowMoreChecks = checkedRecipes.length < 2

    const newRecipesChecklist = toggleRecipeCheckbox(
      recipesChecklist,
      selectedRecipe,
      allowMoreChecks
    )

    setRecipesCheckList(newRecipesChecklist)
  }

  return {
    recipesChecklist,
    handleRecipeChecklist
  }
}
