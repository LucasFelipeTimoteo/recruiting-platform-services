import React from 'react'
import useIngredientsChecklistContext from '../../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import useListItemStyles from './styles'

export default function ListItem({
  children,
  recipe,
}) {
  const { handleRecipesChecklist } = useIngredientsChecklistContext()
  const styles = useListItemStyles()

  return (
    <>
      <li
        className={styles.listItem}
        onClick={() => {
          handleRecipesChecklist(recipe)
        }}
      >
        {children}
      </li>
    </>
  )
}
