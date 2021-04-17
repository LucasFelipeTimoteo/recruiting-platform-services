const threeOrMoreDigitsNumberToMinute = (stringNumber) => {
  const stringNumberParsedToArray = stringNumber.split('')
  stringNumberParsedToArray.splice(-2, 0, ":")
  const stringNumberParsedToMinute = stringNumberParsedToArray.join('')
  
  return stringNumberParsedToMinute
}

export default threeOrMoreDigitsNumberToMinute