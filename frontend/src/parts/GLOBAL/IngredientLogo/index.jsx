import React from 'react'
import useLogo from '../../../hooks/logo/useLogo'
import useIngredientLogoStyles from './styles'

export default function IngredientLogo({ big }) {
  const {
    logoIngredientPath,
    logoIngredientDescription,
    logoIngredientName
  } = useLogo()

  const styles = useIngredientLogoStyles(big)

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}${logoIngredientPath}`}
        alt={logoIngredientDescription}
        title={logoIngredientName}
        className={
          `${ big ? styles.bigLogo : styles.logo }`
        }
      />
    </>
  )
}
