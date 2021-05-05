describe('Verify if ingredients total time in minutes is integer number', () => {
  test('should return false', () => {
    const expected = false
    
    const ingredientsTotalTimeInMinutesDecimal = 2.533333333
    const minutesIsInteger = Number.isInteger(ingredientsTotalTimeInMinutesDecimal)
    
    expect(minutesIsInteger).toBe(expected)
  })
  
  test('should return true', () => {
    const expected = true
    
    const ingredientsTotalTimeInMinutesInteger = 2
    const minutesIsInteger = Number.isInteger(ingredientsTotalTimeInMinutesInteger)

    expect(minutesIsInteger).toBe(expected)
  })
  
})
