import React from 'react'
import { Typography } from '@material-ui/core'

import getRecipesStorage from '../../../utils/RecipesSelect/getRecipesStorage'
import ComplementsList from '../ComplementsList'
import RecipeThumbnail from '../../GLOBAL/RecipeThumbnail'

import useComplementsListStyles from './styles'

export default function SelectedRecipesComplementsList() {
  const selectedRecipes = getRecipesStorage()
  const styles = useComplementsListStyles()

  return (
    <>
      {
        selectedRecipes.map(recipe => (
          <ul className={styles.listWrapper}>
            <li className={styles.recipeAndComplementsListItem}>
              <div className={styles.recipeInfo}>
                <RecipeThumbnail recipe={recipe} />
                <Typography>{recipe.name}</Typography>
              </div>
              <ComplementsList recipe={recipe} />
            </li>
          </ul>
        ))
      }
    </>
  )
}
