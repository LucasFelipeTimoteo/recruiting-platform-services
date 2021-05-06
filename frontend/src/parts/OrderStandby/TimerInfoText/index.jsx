import React from 'react'
import TimerInfoTextTitle from '../TimerInfoTextTitle'
import TimerInfoTextSubtitle from '../TimerInfoTextSubtitle'
import useTimerInfoTextStyles from './styles'

export default function TimerInfoText({ remainingTime }) {
  const styles = useTimerInfoTextStyles()

  return (
    <div className={styles.timerInfoTextContainer}>
      <TimerInfoTextTitle remainingTime={remainingTime} />
      <TimerInfoTextSubtitle />
    </div>
  )
}
