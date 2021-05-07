import React from 'react'
import TimerInfoTextTitle from '../TimerInfoTextTitle'
import TimerInfoTextSubtitle from '../TimerInfoTextSubtitle'
import useTimerInfoTextStyles from './styles'

export default function TimerInfoText({ remainingTime, handleOrderTime }) {
  const styles = useTimerInfoTextStyles()

  return (
    <div className={styles.timerInfoTextContainer}>
      <TimerInfoTextTitle
        handleOrderTime={handleOrderTime}
        remainingTime={remainingTime}
      />
      <TimerInfoTextSubtitle />
    </div>
  )
}
