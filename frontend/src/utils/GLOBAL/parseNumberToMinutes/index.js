import oneDigitNumberToMinute from "./utils/oneDigitNumberToMinute"
import threeOrMoreDigitsNumberToMinute from "./utils/threeOrMoreDigitsNumberToMinute"
import twoDigitsNumberToMinute from "./utils/twoDigitsNumberToMinute"

const parseNumberToMinutes = (number, isMinuteInteger) => {
  let parsedNumber = null

  const stringNumber = number.toString()

  if(isMinuteInteger) {
    return `${stringNumber}:00`
  }

  if (stringNumber.length === 1) {
    parsedNumber = oneDigitNumberToMinute(stringNumber)
  }

  if (stringNumber.length === 2) {
    parsedNumber = twoDigitsNumberToMinute(stringNumber)
  }

  if (stringNumber.length >= 3) {
    parsedNumber = threeOrMoreDigitsNumberToMinute(stringNumber)
  }

  return parsedNumber
}

export default parseNumberToMinutes