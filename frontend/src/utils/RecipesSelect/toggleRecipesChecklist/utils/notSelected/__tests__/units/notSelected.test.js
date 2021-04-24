describe('Return false if recipe id is not equal id of selected recipe', () => {
  test('should return false', () => {
    const recipeId = 3
    const selectedRecipeId = 4
  
    expect(recipeId).not.toBe(selectedRecipeId)
  })
  
})
