import displayMinutes from './utils/displayMinutes'
import displaySeconds from './utils/displaySeconds'

const displayCounterTime = (remainingTime) => {
  const minutes = displayMinutes(remainingTime)
  const seconds = displaySeconds(remainingTime)

  const counterTime = `${minutes}:${seconds} min`

  return counterTime
}

export default displayCounterTime