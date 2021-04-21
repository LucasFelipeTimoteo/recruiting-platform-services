import React from 'react'
import { Typography } from '@material-ui/core'
import useRecipesChecklist from '../../../hooks/recipesSelectHooks/useRecipesChecklist'

import CheckboxImage from '../../GLOBAL/CheckboxImage'
import RecipeThumbnail from '../../GLOBAL/RecipeThumbnail'
import RecipeTime from '../../GLOBAL/RecipeTime'
import ComplementsListItem from '../ListItem'
import useComplementsListStyles from './styles'

export default function ComplementsList({ recipe }) {
  const { recipesChecklist, handleRecipeChecklist } = useRecipesChecklist(recipe.complements)

  const styles = useComplementsListStyles()

  return (
    <ul className={styles.complementsListWrapper}>
      {
        recipesChecklist.map(complement => (
          <ComplementsListItem
            recipe={complement}
            handleRecipeChecklist={handleRecipeChecklist}
          >
            <RecipeThumbnail small recipe={complement} />
            <div className={styles.complementInfoGroup}>
              <Typography
                variant="body2"
                className={styles.complementName}
              >
                {complement.name}
              </Typography>
              <RecipeTime recipe={complement} />
            </div>

            <CheckboxImage
              small
              checked={complement.checked}
              recipe={recipe}
            />
          </ComplementsListItem>
        ))
      }
    </ul>
  )
}
