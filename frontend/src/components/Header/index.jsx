import React from 'react'

import Subtitle from '../../parts/HeaderParts/Subtitle'
import Title from '../../parts/HeaderParts/Title'

import useHeaderStyles from './styles'
import IngredientLogo from '../../parts/GLOBAL/IngredientLogo'


export default function Header() {
  const styles = useHeaderStyles()

  return (
    <header className={styles.header}>
      <IngredientLogo />
      <div className={styles.titleAndSubtitleGroup}>
        <Title />
        <Subtitle />
      </div>
    </header>
  )
}
