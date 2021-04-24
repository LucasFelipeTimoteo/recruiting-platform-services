import React from 'react'

import IngredientsChecklistContext from '../context'
import useIngredientsChecklist from '../hooks/useIngredientsChecklist'
import useIngredients from '../../../hooks/ingredientsHooks/useIngredients'

export default function IngredientsChecklistProvider ({ children }) {
  const ingredients = useIngredients()
  const {
    ingredientsChecklist,
    handleComplementsChecklist,
    handleRecipesChecklist
  } = useIngredientsChecklist(ingredients)

  const providerValues = {
    ingredientsChecklist,
    handleComplementsChecklist,
    handleRecipesChecklist
  }

  return (
    <IngredientsChecklistContext.Provider value={providerValues}>
      {children}
    </IngredientsChecklistContext.Provider>
  )
}