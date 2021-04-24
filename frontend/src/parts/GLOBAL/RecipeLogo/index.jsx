import React from 'react'
import useThumbnail from '../../../hooks/thubmbnail/useThumbnail'
import useRecipeLogoStyles from './styles'

export default function RecipeLogo({ big }) {
  const {
    thumbnailIngredientDescription,
    thumbnailIngredientPath,
    thumbnailIngredientName,
  } = useThumbnail()

  const styles = useRecipeLogoStyles(big)

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}${thumbnailIngredientPath}`}
        alt={thumbnailIngredientDescription}
        title={thumbnailIngredientName}
        className={
          `${ big ? styles.bigLogo : styles.logo }`
        }
      />
    </>
  )
}
