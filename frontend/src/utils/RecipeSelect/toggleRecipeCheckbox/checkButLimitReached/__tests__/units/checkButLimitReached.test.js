describe('return true is limit was reached', () => {
  test('should return true if not allow more checks', () => {
    const allowMoreChecks = false
    const limitReached = !allowMoreChecks ? true : false
    
    expect(allowMoreChecks).not.toBe(limitReached)
  })
  
})
