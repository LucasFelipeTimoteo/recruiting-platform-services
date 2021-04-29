import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

import useComplementsSelectButtonsStyles from './styles'
import handleOrderfinalization from '../../../utils/OrderStandby/handleFinalization'

export default function ComplementsSelectButtons({
  setRecipesPageStep,
  selectedRecipesList
}) {
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
        onClick={() => handleOrderfinalization(selectedRecipesList)}
      >
        Finalizar
      </Button>
    </ButtonGroup>
  )
}