import React, { memo } from 'react'
import IngredientName from '../IngredientName'
import IngredientTime from '../IngredientTime'
import useIngredientsInfoStyles from './styles'

function IngredientInfo({ ingredient }) {
  const styles = useIngredientsInfoStyles()

  return (
    <div className={styles.IngredientInfoGroup}>
      <IngredientName ingredient={ingredient} />
      <IngredientTime ingredient={ingredient} />
    </div>
  )
}

export default memo(IngredientInfo)