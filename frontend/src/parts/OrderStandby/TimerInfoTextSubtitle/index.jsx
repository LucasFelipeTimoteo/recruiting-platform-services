import React from 'react'
import { Typography } from '@material-ui/core'
import useTimerInfoTextSubtitle from './styles'

export default function TimerInfoTextSubtitle() {
  const styles = useTimerInfoTextSubtitle()

  return (
    <>
      <Typography
        variant="subtitle2"
        className={styles.timerInfoTextSubtitle}
      >
        Tempo restante para ficar pronto
      </Typography>
    </>
  )
}
