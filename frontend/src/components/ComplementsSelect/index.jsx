import React from 'react'
import { Typography } from '@material-ui/core'

import ComplementsSelectButtons from '../../parts/ComplementsSelect/ComplementsSelectButtons'
import SelectedRecipesComplementsList from '../../parts/ComplementsSelect/SelectedRecipesComplementsList'
import useIngredientsChecklistContext from '../../contexts/IngredientsChecklist/hooks/useIngredientsChecklistContext'
import selectedRecipes from '../../utils/GLOBAL/selectedRecipes'

import useComplementsSelectStyles from './styles'

export default function ComplementsSelect({
  pageStep,
  setRecipesPageStep
}) {
  const { ingredientsChecklist } = useIngredientsChecklistContext()
  const selectedRecipesList = selectedRecipes(ingredientsChecklist)

  const styles = useComplementsSelectStyles()

  if (pageStep !== 'complements') {
    return null
  }
  return (
    <>
      <Typography
        variant="body2"
        className={styles.listTitle}
      >
        Adicione complementos ao seu pedido
      </Typography>
      <SelectedRecipesComplementsList
        selectedRecipesList={selectedRecipesList}
      />
      <ComplementsSelectButtons
        setRecipesPageStep={setRecipesPageStep}
        selectedRecipesList={selectedRecipesList}
      />
    </>
  )
}
