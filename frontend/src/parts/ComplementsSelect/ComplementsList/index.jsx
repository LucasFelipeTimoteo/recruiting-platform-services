import React from 'react'

import CheckboxImage from '../../GLOBAL/CheckboxImage'
import IngredientThumbnail from '../../GLOBAL/IngredientThumbnail'
import ComplementsListItem from '../ComplementsListItem'
import IngredientInfo from '../../GLOBAL/IngredientInfo'

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
            <IngredientInfo ingredient={complement} />
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
