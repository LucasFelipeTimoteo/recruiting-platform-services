import React from 'react'

import CheckboxImage from '../../GLOBAL/CheckboxImage'
import RecipeThumbnail from '../../GLOBAL/RecipeThumbnail'
import RecipeTime from '../../GLOBAL/RecipeTime'
import RecipeName from '../../GLOBAL/RecipeName'
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
              <RecipeName ingredient={complement} small /> 
              <RecipeTime ingredient={complement} />
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
