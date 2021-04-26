import React from 'react'

import CheckboxImage from '../../GLOBAL/CheckboxImage'
import IngredientThumbnail from '../../GLOBAL/IngredientThumbnail'
import IngredientTime from '../../GLOBAL/IngredientTime'
import IngredientName from '../../GLOBAL/IngredientName'
import ComplementsListItem from '../ComplementsListItem'

import useComplementsListStyles from './styles'

export default function ComplementsList({ recipe }) {
  const styles = useComplementsListStyles()

  return (
    <ul className={styles.complementsListWrapper}>
      {
        recipe.complements?.map(complement => (
          <ComplementsListItem
            key={complement.id}
            complement={complement}
            recipe={recipe}
          >
            <IngredientThumbnail small ingredient={complement} />
            <div className={styles.complementInfoGroup}>
              <IngredientName ingredient={complement} small /> 
              <IngredientTime ingredient={complement} />
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
