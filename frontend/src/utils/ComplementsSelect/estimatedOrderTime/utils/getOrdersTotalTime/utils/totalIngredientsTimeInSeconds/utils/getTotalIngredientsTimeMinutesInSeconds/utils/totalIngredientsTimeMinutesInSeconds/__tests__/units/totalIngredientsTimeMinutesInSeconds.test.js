const totalOrderIngredientsTimeMinutes = 2

describe('to convert mitutes in seconds, totalIngredientsTimeMinutesInSeconds should multiply minutes per 60 ', () => {
  test('should return 120 as result of multiplication of minutes per 60', () => {
    const expected = 120

    const totalOrderIngredientsTimeMinutesInSeconds = (
      totalOrderIngredientsTimeMinutes * 60
    )

    expect(totalOrderIngredientsTimeMinutesInSeconds).toBe(expected)
  })
})
