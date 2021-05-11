import React from 'react'
import TimerInfoTextTitle from '../TimerInfoTextTitle'
import TimerInfoTextSubtitle from '../TimerInfoTextSubtitle'
import useTimerInfoTextStyles from './styles'

export default function TimerInfoText({ remainingTime, handlerdersTotalTimeInSeconds }) {
  const styles = useTimerInfoTextStyles()

  return (
    <div className={styles.timerInfoTextContainer}>
      <TimerInfoTextTitle
        handlerdersTotalTimeInSeconds={handlerdersTotalTimeInSeconds}
        remainingTime={remainingTime}
      />
      <TimerInfoTextSubtitle />
    </div>
  )
}
