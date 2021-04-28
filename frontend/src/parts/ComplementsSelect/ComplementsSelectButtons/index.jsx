import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import useComplementsSelectButtonsStyles from './styles'
import selectedingredients from '../../../utils/ComplementsSelect/selectedingredients'
import estimatedOrderTime from '../../../utils/ComplementsSelect/estimatedOrderTime'

export default function ComplementsSelectButtons({
  setRecipesPageStep,
  selectedRecipesList
}) {
  const handleOrderfinalization = () => {
    const orders = selectedingredients(selectedRecipesList)

    const estimatedTime = estimatedOrderTime(orders)

    console.log(estimatedTime)
  }

  const styles = useComplementsSelectButtonsStyles()

  return (
    <ButtonGroup className={styles.buttonsGroup}>
      <Button
        className={`${styles.buttonsbaseStyle} ${styles.returnButton}`}
        onClick={setRecipesPageStep}
      >
        Voltar
    </Button>
      <Button
        className={`${styles.buttonsbaseStyle} ${styles.finalizationButton}`}
        onClick={handleOrderfinalization}
      >
        Finalizar
    </Button>
    </ButtonGroup>
  )
}
