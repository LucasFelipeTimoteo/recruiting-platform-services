import React from 'react'
import { Typography } from '@material-ui/core'

import CheckboxImage from '../../parts/GLOBAL/CheckboxImage'
import RecipeTime from '../../parts/GLOBAL/RecipeTime'
import RecipeThumbnail from '../../parts/GLOBAL/RecipeThumbnail'
import RecipeListItem from '../../parts/RecipesSelectParts/RecipeListItem'
import ContinueButton from '../../parts/RecipesSelectParts/ContinueButton'

import useRecipesSelectStyles from './styles'
import useIngredientsChecklistContext from '../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'

export default function RecipesSelect({
  pageStep,
  setComplementsPageStep
}) {
  const { ingredientsChecklist } = useIngredientsChecklistContext()
  const styles = useRecipesSelectStyles()

  if (pageStep !== 'recipes') {
    return null
  }
  return (
    <>
      <ul className={styles.ListWrapper}>
        {
          ingredientsChecklist.map(recipe => (
            <RecipeListItem
              key={recipe.id}
              recipe={recipe}
            >
              <RecipeThumbnail recipe={recipe} />
              <div className={styles.recipeInfoGroup}>
                <Typography variant="body1" className={styles.recipe}>
                  {recipe.name}
                </Typography>
                <RecipeTime recipe={recipe} />
              </div>
              <CheckboxImage checked={recipe.checked} />
            </RecipeListItem>
          ))
        }
      </ul>

      <ContinueButton
       setComplementsPageStep={setComplementsPageStep}
       ingredientsChecklist={ingredientsChecklist}
       />
    </>
  )
}
