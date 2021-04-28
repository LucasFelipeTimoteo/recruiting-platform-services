const getParsedIngredientsTimes = (ingredientsTotalTimeInMinutes) => {
  const ingredientsTotalTimeInMinutesSplited = String(
    ingredientsTotalTimeInMinutes
  ).split('.')

  const ingredientsTotalTimeMinutes = ingredientsTotalTimeInMinutesSplited[0]
  const ingredientsTotalTimeSecounds = ingredientsTotalTimeInMinutesSplited[1]

  const parseFloatMinutesToSecounds = ingredientsTotalTimeSecounds * 60
  const splitedSecounds = String(parseFloatMinutesToSecounds).split('')
  splitedSecounds.length = 2
  const parsedSecounds = splitedSecounds.join('')

  return [
    ingredientsTotalTimeMinutes,
    parsedSecounds
  ]
}

export default getParsedIngredientsTimes
