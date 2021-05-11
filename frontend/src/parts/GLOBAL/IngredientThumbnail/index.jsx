import React, { memo } from 'react'
import useIngredientThumbnailStyles from './styles'

function IngredientThumbnail({ ingredient, small }) {
  const styles = useIngredientThumbnailStyles()

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}${ingredient.image.src}`}
        alt={ingredient.description}
        title={ingredient.name}
        className={
          `${styles.ingredientThumbnail}
           ${small && styles.smallIngredientThumbnail}`
        }
      />
    </>
  )
}

export default memo(IngredientThumbnail)