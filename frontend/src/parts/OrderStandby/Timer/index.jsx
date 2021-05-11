import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import TimerInfoText from '../TimerInfoText'
import ringBell from '../../../utils/OrderStandby/ringBell'
import useOrdersTotalTimeContext from '../../../contexts/ordersTotalTimes/hooks/useOrdersTotalTimeContext'

export default function Timer() {
  const { ordersTotalTimeInSeconds, handlerdersTotalTimeInSeconds } = useOrdersTotalTimeContext()

  return (
    <CountdownCircleTimer
      id="countdown"
      size={250}
      isPlaying
      duration={ordersTotalTimeInSeconds}
      initialRemainingTime={ordersTotalTimeInSeconds}
      colors={[['#2ee897', 0.70], ['#F7B801', 0.28], ['#A30000']]}
      onComplete={ringBell}
    >
      {
        ({ remainingTime }) => (
          <TimerInfoText
            handlerdersTotalTimeInSeconds={handlerdersTotalTimeInSeconds}
            remainingTime={remainingTime}
          />
        )
      }
    </CountdownCircleTimer>
  )
}
