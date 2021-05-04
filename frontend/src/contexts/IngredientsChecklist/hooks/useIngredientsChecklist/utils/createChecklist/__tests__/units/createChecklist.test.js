import recipesWithoutCheckMock from '../../../../../../../../mocks/recipes/recipesWithoutCheck.mock'

const checklist = recipesWithoutCheckMock?.map(recipe => {
  const newRecipeChecklistItem = { ...recipe, checked: false }
  const complementsChecklist = newRecipeChecklistItem.complements?.map(complement => (
    { ...complement, checked: false }
  ))

  const newChecklist = {
    ...newRecipeChecklistItem,
    complements: complementsChecklist
  }

  return newChecklist
})

describe('Add "checked: false" property to recipes and complements list', () => {
  test('should have "checked: false" in each recipe object', () => {
    const expectedProperty = { checked: false }

    checklist.map(recipe => (
      expect(recipe).toMatchObject(expectedProperty)
    ))
  })

  test('should have "checked: false" in each complement object', () => {
    const expectedProperty = { checked: false }

    const complementsList = checklist.map(recipe => recipe.complements)
    const complements = complementsList.flat()

    complements.map(complement => (
      expect(complement).toMatchObject(expectedProperty)
    ))
  })
})
