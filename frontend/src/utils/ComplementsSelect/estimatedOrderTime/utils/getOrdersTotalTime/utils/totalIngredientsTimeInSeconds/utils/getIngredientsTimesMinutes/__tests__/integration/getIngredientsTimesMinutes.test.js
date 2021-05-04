import parseNumberToMinutes from "../../../../../../../../../../GLOBAL/parseNumberToMinutes"

const recipeTime = 245

describe('Test integration of getIngredientsTimesMinutes util functions', () => {
  test('should return a string with format "Numbers:Numbers". In this case "2:45"', () => {
    const expected = "2:45"
    const parsedNumberToMinutesString = parseNumberToMinutes(recipeTime)

    expect(parsedNumberToMinutesString).toBe(expected)
  })
})
