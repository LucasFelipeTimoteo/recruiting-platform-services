const twoDigitsNumberToMinute = (stringNumber) => {
  const stringNumberParsedToMinuteArray = ["0:", ...stringNumber]
  const stringNumberParsedToMinute = stringNumberParsedToMinuteArray.join('')
  
  return stringNumberParsedToMinute
}

export default twoDigitsNumberToMinute