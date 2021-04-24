import React from 'react'
import { Button } from '@material-ui/core'
import selectedRecipes from '../../../utils/GLOBAL/selectedRecipes'
import shouldGoToNextPage from '../../../utils/RecipesSelect/shouldGoToNextPage'
import useContinueButtonStyles from './styles'

export default function ContinueButton({ setComplementsPageStep, ingredientsChecklist }) {
  const styles = useContinueButtonStyles()
  const selectedRecipesList = selectedRecipes(ingredientsChecklist)
  const nextPageCondition = shouldGoToNextPage(selectedRecipesList)


  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      disableElevation={true}
      className={styles.button}
      onClick={nextPageCondition ? setComplementsPageStep : null}
    >
      Continuar
    </Button>
  )
}
