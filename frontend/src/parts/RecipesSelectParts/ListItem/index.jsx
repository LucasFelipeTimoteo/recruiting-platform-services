import React from 'react'
import setRecipesStorage from '../../../utils/RecipesSelect/setRecipesStorage'
import useListItemStyles from './styles'

export default function ListItem({
  children,
  recipe,
  recipesChecklist,
  handleRecipeChecklist,
}) {
  const styles = useListItemStyles()

  return (
    <>
      <li
        className={styles.listItem}
        onClick={() => {
          handleRecipeChecklist(recipe)
          setRecipesStorage(recipesChecklist)
        }}
      >
        {children}
      </li>
    </>
  )
}
