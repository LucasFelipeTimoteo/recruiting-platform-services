import React from 'react'
import useListItemStyles from './styles'

export default function ListItem({ children, recipe, handleRecipeChecklist }) {
  const styles = useListItemStyles()

  return (
    <>
      <li
        className={styles.listItem}
        onClick={() => handleRecipeChecklist(recipe)}
      >
        {children}
      </li>
    </>
  )
}
