import React from 'react'
import RecipeName from '../RecipeName'
import RecipeTime from '../RecipeTime'
import useIngredientsInfoStyles from './styles'

export default function IngredientInfo({ ingredient }) {
  const styles = useIngredientsInfoStyles()

  return (
    <div className={styles.IngredientInfoGroup}>
      <RecipeName ingredient={ingredient} />
      <RecipeTime ingredient={ingredient} />
    </div>
  )
}
