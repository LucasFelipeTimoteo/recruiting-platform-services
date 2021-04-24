import { useEffect, useState } from 'react'
import toggleRecipesChecklist from '../../../utils/RecipesSelect/toggleRecipesChecklist'
import toggleComplementsChecklist from '../../../utils/ComplementsSelect/toggleComplementsChecklist'

export default function useIngredientsChecklist(ingredients) {
  const [ingredientsChecklist, setIngredientsChecklist] = useState([])

  useEffect(() => {
    const checklist = ingredients?.map(recipe => {
      const newRecipeChecklistItem = { ...recipe, checked: false }
      const complementsChecklist = newRecipeChecklistItem.complements?.map(complement => (
        { ...complement, checked: false }
      ))

      const newChecklist = {
        ...newRecipeChecklistItem,
        complements: complementsChecklist
      }

      return newChecklist
    })

    setIngredientsChecklist(checklist)
  }, [ingredients])

  const handleRecipesChecklist = (selectedRecipes) => {
    const newRecipesChecklist = toggleRecipesChecklist(
      ingredientsChecklist,
      selectedRecipes
    )

    setIngredientsChecklist(newRecipesChecklist)
  }

  const handleComplementsChecklist = (selectedComplement, currentRecipe) => {
    const newSelectedRecipesChecklist = toggleComplementsChecklist(
      ingredientsChecklist,
      selectedComplement,
      currentRecipe
    )

    setIngredientsChecklist(newSelectedRecipesChecklist)
  }

  return {
    ingredientsChecklist,
    handleRecipesChecklist,
    handleComplementsChecklist
  }
}
