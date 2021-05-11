import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import useTimerInfoTextTitleStyles from './styles'
import timerDisplay from '../../../utils/OrderStandby/timerDisplay'

export default function TimerInfoTextTitle({ remainingTime, handlerdersTotalTimeInSeconds }) {
  const timerDisplayCounter = timerDisplay(remainingTime)
  useEffect(() => {
    const storeCondition = remainingTime > 0 ? remainingTime - 1 : remainingTime
    handlerdersTotalTimeInSeconds(storeCondition)
  }, [remainingTime, handlerdersTotalTimeInSeconds])

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
