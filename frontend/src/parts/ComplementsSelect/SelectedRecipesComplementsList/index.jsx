import React from 'react'

import ComplementsList from '../ComplementsList'
import IngredientThumbnail from '../../GLOBAL/IngredientThumbnail'

import useComplementsListStyles from './styles'
import useIngredientsChecklistContext from '../../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import selectedRecipes from '../../../utils/GLOBAL/selectedRecipes'
import IngredientInfo from '../../../parts/GLOBAL/IngredientInfo'

export default function SelectedRecipesComplementsList() {
  const { ingredientsChecklist } = useIngredientsChecklistContext()
  const selectedRecipesList = selectedRecipes(ingredientsChecklist)

  const styles = useComplementsListStyles()

  return (
    <div className={styles.selectedRecipesComplementsListWrapper}>
      {
        selectedRecipesList.map(recipe => (
          <ul
            key={recipe.id}
            className={styles.selectedRecipesComplementsList}
          >
            <li className={styles.selectedRecipesComplementsListItem}>
              <div className={styles.selectedRecipeInfo}>
                <IngredientThumbnail ingredient={recipe} />
                <IngredientInfo ingredient={recipe} />
              </div>
              <ComplementsList recipe={recipe} />
            </li>
          </ul>
        ))
      }
    </div>
  )
}
