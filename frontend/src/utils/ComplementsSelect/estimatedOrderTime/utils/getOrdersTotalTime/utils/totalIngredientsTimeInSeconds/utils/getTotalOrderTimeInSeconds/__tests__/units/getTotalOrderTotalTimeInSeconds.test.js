const totalIngredientsTimeMinutesInSeconds = 120
const totalIngredientsTimeSeconds = 60

describe('Sum the seconds with the minutes converted in seconds of the ingredint time', () => {
  test('should sum 120 and 60 to obtain 180', () => {
    const expected = 180

    const totalOrderTotalTimeInSeconds = (
      totalIngredientsTimeMinutesInSeconds + totalIngredientsTimeSeconds
    )


    expect(totalOrderTotalTimeInSeconds).toBe(expected)
  })
  
})
