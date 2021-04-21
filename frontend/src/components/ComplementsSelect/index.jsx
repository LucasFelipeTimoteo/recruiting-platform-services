import { Typography } from '@material-ui/core'
import React from 'react'

import ActionsButtonsStyles from '../../parts/ComplementsSelect/ActionsButtons'
import SelectedRecipesComplementsList from '../../parts/ComplementsSelect/SelectedRecipesComplementsList'
import useComplementsSelectStyles from './styles'


export default function ComplementsSelect() {
  const styles = useComplementsSelectStyles()
  return (
    <>
      <Typography
        variant="subtitle1"
        className={styles.listTitle}
      >
        Adicione complementos ao seu pedido
      </Typography>
      <SelectedRecipesComplementsList />
      <ActionsButtonsStyles />
    </>
  )
}
