import React from 'react'
import { Typography } from '@material-ui/core'

import CheckboxImage from '../../parts/GLOBAL/CheckboxImage'
import useRecipes from '../../hooks/recipesSelectHooks/useRecipes'
import useRecipesChecklist from '../../hooks/recipesSelectHooks/useRecipesChecklist'

import RecipeTime from '../../parts/GLOBAL/RecipeTime'

import useRecipesSelectStyles from './styles'
import RecipesThumbnail from '../../parts/GLOBAL/RecipeThumbnail'
import ListItem from '../../parts/RecipesSelectParts/ListItem'
import ContinueButton from '../../parts/RecipesSelectParts/ContinueButton'

export default function RecipesSelect() {
  const recipes = useRecipes()
  const { recipesChecklist, handleRecipeChecklist } = useRecipesChecklist(recipes)

  const styles = useRecipesSelectStyles()

  return (
    <>
      <ul className={styles.ListWrapper}>
        {
          recipesChecklist.map(recipe => (
            <ListItem
              key={recipe.id}
              recipe={recipe}
              handleRecipeChecklist={handleRecipeChecklist}
            >
              <RecipesThumbnail recipe={recipe} />
              <div className={styles.recipeInfoGroup}>
                <Typography variant="body1" className={styles.recipe}>
                  {recipe.name}
                </Typography>
                <RecipeTime recipe={recipe} />
              </div>
              <CheckboxImage checked={recipe.checked} />
            </ListItem>
          ))
        }
      </ul>

      <ContinueButton />
    </>
  )
}
