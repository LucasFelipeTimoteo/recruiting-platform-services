import React from 'react'
import useComplemetsListItem from './style'

export default function ComplementsListItem({ 
  children,
  recipe,
  handleRecipeChecklist,
 }) {
  const styles = useComplemetsListItem()

  return (
    <li 
    className={styles.listItem}
    onClick={() => {
      handleRecipeChecklist(recipe)
    }}
    >
      {children}
    </li>
  )
}
