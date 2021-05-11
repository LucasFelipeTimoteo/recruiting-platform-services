import React from 'react'
import useIngredientsChecklistContext from '../../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import useComplemetsListItem from './style'

export default function ComplementsListItem({
  children,
  complement,
  recipe
}) {
  const { handleComplementsChecklist } = useIngredientsChecklistContext()
  const styles = useComplemetsListItem()

  return (
    <li
      title={`Clique aqui para selecionar o complemento "${complement.name}"`}
      className={styles.listItem}
      onClick={() => { handleComplementsChecklist(complement, recipe) }}
    >
      {children}
    </li>
  )
}
