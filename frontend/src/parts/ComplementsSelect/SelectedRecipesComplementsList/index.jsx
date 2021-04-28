import React from 'react'

import ComplementsList from '../ComplementsList'
import IngredientThumbnail from '../../GLOBAL/IngredientThumbnail'

import useComplementsListStyles from './styles'
import IngredientInfo from '../../../parts/GLOBAL/IngredientInfo'

export default function SelectedRecipesComplementsList({ selectedRecipesList }) {
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
