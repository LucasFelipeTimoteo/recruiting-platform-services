import { useContext } from 'react'
import IngredientsChecklistContext from '../../context'

export default function useIngredientsChecklistContext() {
  const {
    ingredientsChecklist,
    handleComplementsChecklist,
    handleRecipesChecklist
  } = useContext(IngredientsChecklistContext)

  return {
    ingredientsChecklist,
    handleComplementsChecklist,
    handleRecipesChecklist
  }
}
