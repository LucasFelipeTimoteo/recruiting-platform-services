import React from 'react'
import useThumbnail from '../../../hooks/thubmbnail/useThumbnail'
import useIngredientLogoStyles from './styles'

export default function IngredientLogo({ big }) {
  const {
    thumbnailIngredientDescription,
    thumbnailIngredientPath,
    thumbnailIngredientName,
  } = useThumbnail()

  const styles = useIngredientLogoStyles(big)

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
