import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import useActionsButtonsStyles from './styles'

export default function ActionsButtons() {
  const styles = useActionsButtonsStyles()

  return (
    <ButtonGroup className={styles.buttonGroup}>
      <Button
        className={`${styles.buttonsbaseStyle} ${styles.returnButtonColor}`}
      >
        Voltar
    </Button>
      <Button
        className={`${styles.buttonsbaseStyle} ${styles.finalizationButtonColor}`}
      >
        Finalizar
    </Button>
    </ButtonGroup>
  )
}
