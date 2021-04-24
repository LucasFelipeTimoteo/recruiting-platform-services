import React from 'react'

import Subtitle from '../../parts/HeaderParts/Subtitle'
import Title from '../../parts/HeaderParts/Title'

import useHeaderStyles from './styles'
import RecipeLogo from '../../parts/GLOBAL/RecipeLogo'


export default function Header() {
  const styles = useHeaderStyles()

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <RecipeLogo />
        <div className={styles.titleAndSubtitleGroup}>
          <Title />
          <Subtitle />
        </div>
      </div>
    </header>
  )
}
