import React from 'react'
import TimerInfoTextTitle from '../TimerInfoTextTitle'
import TimerInfoTextSubtitle from '../TimerInfoTextSubtitle'
import useTimerInfoText from './styles'

export default function TimerInfoText({ remainingTime }) {
  const styles = useTimerInfoText()

  return (
    <div className={styles.timerInfoTextContainer}>
      <TimerInfoTextTitle remainingTime={remainingTime} />
      <TimerInfoTextSubtitle />
    </div>
  )
}
