import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import TimerInfoText from '../TimerInfoText'
import ringBell from '../../../utils/OrderStandby/ringBell'

export default function Timer() {
  return (
    <CountdownCircleTimer
      id="countdown"
      size={250}
      isPlaying
      duration={10}
      initialRemainingTime={10}
      colors={[['#2ee897', 0.70], ['#F7B801', 0.28], ['#A30000']]}
      onComplete={ringBell}
    >
      {
        ({ remainingTime }) => (
          <TimerInfoText remainingTime={remainingTime} />
        )
      }
    </CountdownCircleTimer>
  )
}
