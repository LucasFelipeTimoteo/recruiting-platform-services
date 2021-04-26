import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import useComplementsSelectButtonsStyles from './styles'

export default function ComplementsSelectButtons({setRecipesPageStep}) {
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
      >
        Finalizar
    </Button>
    </ButtonGroup>
  )
}
