import React from 'react'

import Subtitle from '../../parts/HeaderParts/Subtitle'
import Title from '../../parts/HeaderParts/Title'

import useLogoRecipe from '../../hooks/recipesSelectHooks/useLogoRecipe'

import useHeaderStyles from './styles'


export default function Header() {
  const { 
    logoRecipePath,
    logoRecipeDescription,
    logoRecipeName
  } = useLogoRecipe()

  const styles = useHeaderStyles()

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src={`${process.env.PUBLIC_URL}${logoRecipePath}`}
          alt={logoRecipeDescription}
          title={logoRecipeName}
          className={styles.logo}
        />

        <div className={styles.titleAndSubtitleGroup}>
          <Title />
          <Subtitle />
        </div>
      </div>
    </header>
  )
}
