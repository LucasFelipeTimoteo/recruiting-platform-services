import React from 'react'
import useRecipeThumbnailStyles from './styles'

export default function RecipesThumbnail({ recipe }) {
  const styles = useRecipeThumbnailStyles()

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}${recipe.image.src}`}
        alt={recipe.description}
        title={recipe.name}
        className={styles.recipeThumbnail}
      />
    </>
  )
}
