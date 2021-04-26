import React from 'react'
import useIngredientsChecklistContext from '../../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import useRecipeListItemStyles from './styles'

export default function RecipeListItem({
  children,
  recipe,
}) {
  const { handleRecipesChecklist } = useIngredientsChecklistContext()
  const styles = useRecipeListItemStyles()

  return (
    <>
      <li
        className={styles.recipeListItem}
        onClick={() => {
          handleRecipesChecklist(recipe)
        }}
      >
        {children}
      </li>
    </>
  )
}
