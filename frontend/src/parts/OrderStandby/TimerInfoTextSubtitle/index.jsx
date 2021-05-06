import React from 'react'
import { Typography } from '@material-ui/core'
import useTimerInfoTextSubtitleStyles from './styles'

export default function TimerInfoTextSubtitle() {
  const styles = useTimerInfoTextSubtitleStyles()

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
