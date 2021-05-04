import recipesMock from "../../../../../mocks/recipes/recipes.mock";

const emptyRecipesList = []

const shouldGoToNextPage = (selectedRecipesList) => (
  selectedRecipesList.length !== 0
)
describe('User only can go to complements selection if select at least one recipe', () => {
  test('should return true to shouldGoToNextPage', () => {
    const expected = true
    const goToNextPage = shouldGoToNextPage(recipesMock)

    expect(goToNextPage).toBe(expected)
  })

  test('should return false to shouldGoToNextPage', () => {
    const expected = false
    const goToNextPage = shouldGoToNextPage(emptyRecipesList)

    expect(goToNextPage).toBe(expected)
  })
})
