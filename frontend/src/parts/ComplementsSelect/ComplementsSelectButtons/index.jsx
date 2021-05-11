import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

import useComplementsSelectButtonsStyles from './styles'
import handleOrderfinalization from '../../../utils/ComplementsSelect/handleFinalization'
import useOrdersTotalTimeContext from '../../../contexts/ordersTotalTimes/hooks/useOrdersTotalTimeContext'
import useUserRegisterContext from '../../../contexts/userRegister/hooks/useUserRegisterContext'

export default function ComplementsSelectButtons({
  setRecipesPageStep,
  selectedRecipesList
}) {
  const { handlerdersTotalTimeInSeconds } = useOrdersTotalTimeContext()
  const { user } = useUserRegisterContext()

  const styles = useComplementsSelectButtonsStyles()

  return (
    <ButtonGroup className={styles.buttonsGroup}>
      <Button
        title="Voltar para a seleção de receitas de café"
        className={`${styles.buttonsbaseStyle} ${styles.returnButton}`}
        onClick={setRecipesPageStep}
      >
        Voltar
      </Button>
      <Button
        title="Confirmar pedido"
        className={`${styles.buttonsbaseStyle} ${styles.finalizationButton}`}
        onClick={() => handleOrderfinalization({
          selectedRecipesList,
          handlerdersTotalTimeInSeconds,
          user
        })}
      >
        Finalizar
      </Button>
    </ButtonGroup>
  )
}