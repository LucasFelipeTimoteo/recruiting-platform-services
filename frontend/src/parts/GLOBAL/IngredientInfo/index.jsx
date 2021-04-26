import React from 'react'
import IngredientName from '../IngredientName'
import IngredientTime from '../IngredientTime'
import useIngredientsInfoStyles from './styles'

export default function IngredientInfo({ ingredient }) {
  const styles = useIngredientsInfoStyles()

  return (
    <div className={styles.IngredientInfoGroup}>
      <IngredientName ingredient={ingredient} />
      <IngredientTime ingredient={ingredient} />
    </div>
  )
}
