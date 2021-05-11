import React from 'react'
import { Button } from '@material-ui/core'
import selectedRecipes from '../../../utils/GLOBAL/selectedRecipes'
import shouldGoToNextPage from '../../../utils/RecipesSelect/shouldGoToNextPage'
import useContinueButtonStyles from './styles'

export default function ContinueButton({
  setComplementsPageStep,
  ingredientsChecklist
}) {
  const selectedRecipesList = selectedRecipes(ingredientsChecklist)
  const nextPageCondition = shouldGoToNextPage(selectedRecipesList)

  const styles = useContinueButtonStyles()

  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      disableElevation
      title="Continuar a seleção de ingredientes"
      className={styles.recipesSelectButton}
      onClick={nextPageCondition ? setComplementsPageStep : null}
    >
      Continuar
    </Button>
  )
}
