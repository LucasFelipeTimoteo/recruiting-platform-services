const oneDigitNumberToMinute = (stringNumber) => {
  if (stringNumber.length > 1) {
    throw new RangeError('Number should contain exactly 1 digit')
  }

    const stringNumberParsedToMinuteArray = ["0:0", ...stringNumber]
    const stringNumberParsedToMinute = stringNumberParsedToMinuteArray.join('')

    return stringNumberParsedToMinute
}

export default oneDigitNumberToMinute