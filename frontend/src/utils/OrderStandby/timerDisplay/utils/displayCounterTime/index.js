import displayMinutes from './utils/displayMinutes'
import displayParsedTotalTime from './utils/displayParsedTotalTime'
import displaySeconds from './utils/displaySeconds'

const displayCounterTime = (remainingTime) => {
  const minutes = displayMinutes(remainingTime)
  const seconds = displaySeconds(remainingTime)
  const counterTime = displayParsedTotalTime(seconds, minutes)

  return counterTime
}

export default displayCounterTime