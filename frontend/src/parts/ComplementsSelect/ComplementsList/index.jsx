import React from 'react'
import { Typography } from '@material-ui/core'

import CheckboxImage from '../../GLOBAL/CheckboxImage'
import RecipeThumbnail from '../../GLOBAL/RecipeThumbnail'
import RecipeTime from '../../GLOBAL/RecipeTime'
import ComplementsListItem from '../ComplementsListItem'

import useComplementsListStyles from './styles'

export default function ComplementsList({ recipe }) {
  const styles = useComplementsListStyles()

  return (
    <ul className={styles.complementsListWrapper}>
      {
        recipe.complements?.map(complement => (
          <ComplementsListItem
            complement={complement}
            recipe={recipe}
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
