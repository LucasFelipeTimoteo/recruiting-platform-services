const ingredientsTotalTimeInMinutes = 1.5
const ingredientsTotalTimeInMinutesSplited = String(
  ingredientsTotalTimeInMinutes
).split('.')

describe('Return the minutes part and seconds part of a number decimal that represents total ingredients time converted in minutes, but seconds part is actually decimal minute', () => {
  test('should split time in two parts array', () => {
    const expected = 2

    const ingredientsTotalTimeInMinutesSplitedLength = (
      ingredientsTotalTimeInMinutesSplited.length
    )

    expect(ingredientsTotalTimeInMinutesSplitedLength).toBe(expected)
  })

  test('should integer part (minutes) be "1"', () => {
    const expected = "1"

    const ingredientsTotalTimeMinutes = ingredientsTotalTimeInMinutesSplited[0]

    expect(ingredientsTotalTimeMinutes).toBe(expected)
  })

  test('should integer part (minutes) be "5"', () => {
    const expected = "5"

    const ingredientsTotalTimeMinutes = ingredientsTotalTimeInMinutesSplited[1]

    expect(ingredientsTotalTimeMinutes).toBe(expected)
  })
})
