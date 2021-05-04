import recipesMock from "../../../../../mocks/recipes/recipes.mock";
import recipesUncheckedOnlyMock from "../../../../../mocks/recipes/recipesUncheckedOnlyMock.mock"
import recipesCheckedOnlyMock from "../../../../../mocks/recipes/recipesCheckedOnly.mock"

describe('Return data type should be the expected', () => {
  test('should return an array as result', () => {
    const expected = true
    const IsRecipesMockResultAnArray = Array.isArray(recipesMock)

    expect(IsRecipesMockResultAnArray).toBe(expected)
  })
})

describe('Return only recipes with "checked: true" property', () => {
  const checkedRecipes = recipesMock.filter(recipe => recipe.checked)

  test('should have an array with length equals 1', () => {
    const expected = 1
    const checkedRecipesLength = checkedRecipes.length

    expect(checkedRecipesLength).toBe(expected)
  })


  test('should return 1 to id of checked recipe', () => {
    const expected = 1
    const idOfCheckedRecipe = checkedRecipes[0].id

    expect(idOfCheckedRecipe).toBe(expected)
  })
})

describe('Do not return any object, cause all objects have "checked: false"', () => {
  test('should return 0 to lenght of array of checked recipes', () => {
    const expected = 0
    const uncheckedRecipes = recipesUncheckedOnlyMock.filter(
      recipe => recipe.checked
    )
    const uncheckedRecipesLength = uncheckedRecipes.length

    expect(uncheckedRecipesLength).toBe(expected)
  })
})

describe('Return any object, cause all objects have "checked: true"', () => {
  test('should return 2 to lenght of array of checked recipes', () => {
    const expected = 2
    const ckedRecipes = recipesCheckedOnlyMock.filter(
      recipe => recipe.checked
    )
    const checkedRecipesLength = ckedRecipes.length

    expect(checkedRecipesLength).toBe(expected)
  })
})