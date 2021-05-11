import React, { memo } from 'react'
import useIngredientsChecklistContext from '../../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import useRecipeListItemStyles from './styles'

function RecipeListItem({
  children,
  recipe,
}) {
  const { handleRecipesChecklist } = useIngredientsChecklistContext()
  const styles = useRecipeListItemStyles()

  return (
    <>
      <li
        title={`Clique aqui para selecionar a receita "${recipe.name}"`}
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

export default memo(RecipeListItem)