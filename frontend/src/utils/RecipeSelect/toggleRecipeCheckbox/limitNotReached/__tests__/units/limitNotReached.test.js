describe('return true if limit was not reached', () => {
  test('should return true to limitReached if allowMoreCheks is true', () => {
    const expected = true
    const allowMoreChecks = true
    const limitReached = allowMoreChecks ? true : false

    expect(expected).toBe(limitReached)
  })
  
})
