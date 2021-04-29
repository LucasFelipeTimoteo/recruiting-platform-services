import React from 'react'
import { Typography } from '@material-ui/core'
import useSuccessTitleStyles from './styles'

export default function SuccessTitle() {
  const styles = useSuccessTitleStyles()

  return (
    <Typography
      variant="h3"
      className={styles.successTitle}
    >
      Pedido realizado com sucesso!
    </Typography>
  )
}
