import React from 'react'
import { Typography } from '@material-ui/core'

import ActionsButtonsStyles from '../../parts/ComplementsSelect/ActionsButtons'
import SelectedRecipesComplementsList from '../../parts/ComplementsSelect/SelectedRecipesComplementsList'
import useComplementsSelectStyles from './styles'


export default function ComplementsSelect({
  pageStep,
  setRecipesPageStep
}) {
  const styles = useComplementsSelectStyles()

  if (pageStep !== 'complements') {
    return null
  }
  return (
    <>
      <Typography
        variant="subtitle1"
        className={styles.listTitle}
      >
        Adicione complementos ao seu pedido
      </Typography>
      <SelectedRecipesComplementsList />
      <ActionsButtonsStyles
        setRecipesPageStep={setRecipesPageStep}
      />
    </>
  )
}
