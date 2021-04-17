import oneDigitNumberToMinute from "./complements/oneDigitNumberToMinute"
import threeOrMoreDigitsNumberToMinute from "./complements/threeOrMoreDigitsNumberToMinute"
import twoDigitsNumberToMinute from "./complements/twoDigitsNumberToMinute"

const parseNumberToMinutes = (number) => {
  let parsedNumber = null

  const stringNumber = number.toString()

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