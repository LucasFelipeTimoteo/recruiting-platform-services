import React from 'react'

import ComplementsList from '../ComplementsList'
import RecipeThumbnail from '../../GLOBAL/RecipeThumbnail'

import useComplementsListStyles from './styles'
import useIngredientsChecklistContext from '../../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import selectedRecipes from '../../../utils/GLOBAL/selectedRecipes'
import RecipeName from '../../GLOBAL/RecipeName'
import RecipeTime from '../../GLOBAL/RecipeTime'

export default function SelectedRecipesComplementsList() {
  const { ingredientsChecklist } = useIngredientsChecklistContext()
  const selectedRecipesList = selectedRecipes(ingredientsChecklist)
  
  const styles = useComplementsListStyles()

  return (
    <>
      {
        selectedRecipesList.map(recipe => (
          <ul className={styles.listWrapper}>
            <li className={styles.recipeAndComplementsListItem}>
              <div className={styles.recipeInfo}>
                <RecipeThumbnail recipe={recipe} />
                
                <RecipeName ingredient={recipe} />
                <RecipeTime ingredient={recipe} />
              </div>
              <ComplementsList recipe={recipe} />
            </li>
          </ul>
        ))
      }
    </>
  )
}
