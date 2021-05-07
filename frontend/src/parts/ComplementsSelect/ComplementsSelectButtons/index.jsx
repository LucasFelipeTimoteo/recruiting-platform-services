import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

import useComplementsSelectButtonsStyles from './styles'
import handleOrderfinalization from '../../../utils/ComplementsSelect/handleFinalization'
import useOrdersTotalTimeContext from '../../../contexts/ordersTotalTimes/hooks/useOrdersTotalTimeContext'

export default function ComplementsSelectButtons({
  setRecipesPageStep,
  selectedRecipesList
}) {
  const { handleOrderTime } = useOrdersTotalTimeContext()
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
        onClick={() => (
          handleOrderfinalization(selectedRecipesList, handleOrderTime)
        )}
      >
        Finalizar
      </Button>
    </ButtonGroup>
  )
}