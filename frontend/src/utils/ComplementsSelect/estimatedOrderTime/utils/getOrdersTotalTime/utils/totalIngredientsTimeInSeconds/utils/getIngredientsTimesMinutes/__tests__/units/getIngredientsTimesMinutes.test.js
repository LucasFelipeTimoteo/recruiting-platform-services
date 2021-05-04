const recipeTimeMinuteString =  '2:35'

describe('Return correct parsed value of received minute string', () => {
  test('should return split a minute number in a array with lenght equals 2', () => {
    const expected = 2

    const recipeTimeSplited = recipeTimeMinuteString.split(':')
    const recipeTimeSplitedLength = recipeTimeSplited.length

    expect(recipeTimeSplitedLength).toBe(expected)
  })

  test('should return 2 number to index 0 of splitted minute time string', () => {
    const expected = 2

    const recipeTimeSplited = recipeTimeMinuteString.split(':')
    const recipeTimeminutes = Number(recipeTimeSplited[0])
    expect(recipeTimeminutes).toBe(expected)
  })
})
