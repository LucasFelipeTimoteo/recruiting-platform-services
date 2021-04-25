import React from 'react'

import ComplementsList from '../ComplementsList'
import RecipeThumbnail from '../../GLOBAL/RecipeThumbnail'

import useComplementsListStyles from './styles'
import useIngredientsChecklistContext from '../../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import selectedRecipes from '../../../utils/GLOBAL/selectedRecipes'
import IngredientInfo from '../../../parts/GLOBAL/IngredientInfo'

export default function SelectedRecipesComplementsList() {
  const { ingredientsChecklist } = useIngredientsChecklistContext()
  const selectedRecipesList = selectedRecipes(ingredientsChecklist)

  const styles = useComplementsListStyles()

  return (
    <>
      {
        selectedRecipesList.map(recipe => (
          <ul key={recipe.id} className={styles.listWrapper}>
            <li className={styles.recipeAndComplementsListItem}>
              <div className={styles.recipeInfo}>
                <RecipeThumbnail recipe={recipe} />
                <IngredientInfo ingredient={recipe} />
              </div>
              <ComplementsList recipe={recipe} />
            </li>
          </ul>
        ))
      }
    </>
  )
}
