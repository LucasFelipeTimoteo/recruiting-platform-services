import React from 'react'

import Subtitle from '../../parts/HeaderParts/Subtitle'
import Title from '../../parts/HeaderParts/Title'

import useThumbnail from '../../hooks/thubmbnail/useThumbnail'

import useHeaderStyles from './styles'


export default function Header() {
  const {
    thumbnailIngredientDescription,
    thumbnailIngredientPath,
    thumbnailIngredientName,
  } = useThumbnail()

  const styles = useHeaderStyles()

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src={`${process.env.PUBLIC_URL}${thumbnailIngredientPath}`}
          alt={thumbnailIngredientDescription}
          title={thumbnailIngredientName}
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
