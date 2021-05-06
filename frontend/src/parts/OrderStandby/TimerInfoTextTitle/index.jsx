import React from 'react'
import { Typography } from '@material-ui/core'
import useTimerInfoTextTitleStyles from './styles'
import timerDisplay from '../../../utils/OrderStandby/timerDisplay'

export default function TimerInfoTextTitle({ remainingTime }) {
  const timerDisplayCounter = timerDisplay(remainingTime)
  const styles = useTimerInfoTextTitleStyles()

  return (
    <>
      <Typography
        variant="h3"
        className={styles.timerInfoTextTitle}
      >
        {timerDisplayCounter}
      </Typography>
    </>
  )
}
