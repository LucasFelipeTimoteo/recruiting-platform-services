import React from 'react'
import useIngredientThumbnailStyles from './styles'

export default function IngredientThumbnail({ recipe, small }) {
  const styles = useIngredientThumbnailStyles()

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}${recipe.image.src}`}
        alt={recipe.description}
        title={recipe.name}
        className={
          `${styles.IngredientThumbnail}
           ${small && styles.smallIngredientThumbnail}`
        }
      />
    </>
  )
}
