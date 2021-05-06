import getDisplayRawSeconds from "./utils/getDisplayRawSeconds"
import parseDisplayRawSeconds from "./utils/parseDisplayRawSeconds"

const displaySeconds = (remainingTime) => {
  const rawSeconds = getDisplayRawSeconds(remainingTime)
  const seconds = parseDisplayRawSeconds(rawSeconds)

  return seconds
}

export default displaySeconds