import { useEffect, useState } from 'react'
import toggleRecipesChecklist from '../../../../utils/RecipesSelect/toggleRecipesChecklist'
import toggleComplementsChecklist from '../../../../utils/ComplementsSelect/toggleComplementsChecklist'
import createChecklist from './utils/createChecklist'

export default function useIngredientsChecklist(ingredients) {
  const [ingredientsChecklist, setIngredientsChecklist] = useState([])

  useEffect(() => {
    const checklist = createChecklist(ingredients)

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
