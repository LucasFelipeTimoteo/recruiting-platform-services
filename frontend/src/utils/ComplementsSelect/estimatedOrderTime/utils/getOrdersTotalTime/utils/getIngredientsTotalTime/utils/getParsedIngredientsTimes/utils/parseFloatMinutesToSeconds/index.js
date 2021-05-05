import secondsWithTwoDigitsOnly from "../secondsWithTwoDigitsOnly"

const parseFloatMinutesToSeconds = (ingredientsTotalTimeSeconds) => {
  const parseIngredientsTotalTimeSecondsNumberToTwoDigits = secondsWithTwoDigitsOnly(
    ingredientsTotalTimeSeconds
  )

  const ingredientsTotalTimeSecondsParsedNumber = Number(
    parseIngredientsTotalTimeSecondsNumberToTwoDigits
  )

  const parseIngredientsTotalTimeSecondsNumberToDecimal = (
    `0.${ingredientsTotalTimeSecondsParsedNumber}`
  )

  const parsedOrderFloatMinutesToSecondsNumber = (
    Math.ceil(parseIngredientsTotalTimeSecondsNumberToDecimal * 60)
  )
  const parsedOrderFloatMinutesToSeconds = String(
    parsedOrderFloatMinutesToSecondsNumber
  )

  return parsedOrderFloatMinutesToSeconds
}

export default parseFloatMinutesToSeconds