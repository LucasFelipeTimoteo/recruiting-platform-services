const recipeTimeMinuteString =  '2:35'

describe('Return correct parsed value of received minute string', () => {
  test('should return split a minute number in a array with lenght equals 2', () => {
    const expected = 2

    const recipeTimeSplited = recipeTimeMinuteString.split(':')
    const recipeTimeSplitedlength = recipeTimeSplited.length

    expect(recipeTimeSplitedlength).toBe(expected)
  })

  test('should return 35 number to index 0 of splitted minute time string', () => {
    const expected = 35

    const recipeTimeSplited = recipeTimeMinuteString.split(':')
    const recipeTimeSeconds = Number(recipeTimeSplited[1])
    expect(recipeTimeSeconds).toBe(expected)
  })
})
