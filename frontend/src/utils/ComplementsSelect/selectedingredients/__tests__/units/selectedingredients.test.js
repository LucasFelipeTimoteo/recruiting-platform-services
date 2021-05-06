import selectedRecipesMock from '../../../../../mocks/recipes/selectedRecipes.mock'

const selectedIngredientsList = selectedRecipesMock.map(recipe => {
  const selectedComplements = recipe.complements.filter(complement => complement.checked)
  const selectedIngredients = {...recipe, complements: selectedComplements}

  return selectedIngredients
})

const complements = selectedRecipesMock.map(recipe => recipe.complements).flat(2)

describe('Return a array with selected recipes, where any recipe have a property "complements" that have a array with objects of selected complements', () => {

  describe('Return a array with correct length', () => {
    test('should return an array with length equal 2', () => {
      const expected = 2

      const selectedIngredientsLength = selectedIngredientsList.length

      expect(selectedIngredientsLength).toBe(expected)
    })
  })

  describe('Should return correct properties in each recipe object', () => {
    test('should return an array with objects that have id property', () => {
      const expectedProperty = "id"

      selectedRecipesMock.map(recipe => (
        expect(recipe).toHaveProperty(expectedProperty)
      ))
    })

    test('should return an array with objects that have name property', () => {
      const expectedProperty = "name"

      selectedRecipesMock.map(recipe => (
        expect(recipe).toHaveProperty(expectedProperty)
      ))
    })

    test('should return an array with objects that have checked property', () => {
      const expectedProperty = "checked"

      selectedRecipesMock.map(recipe => (
        expect(recipe).toHaveProperty(expectedProperty)
      ))
    })

    test('should return an array with objects that have time property', () => {
      const expectedProperty = "time"

      selectedRecipesMock.map(recipe => (
        expect(recipe).toHaveProperty(expectedProperty)
      ))
    })

    test('should return an array with objects that have complements property', () => {
      const expectedProperty = "complements"

      selectedRecipesMock.map(recipe => (
        expect(recipe).toHaveProperty(expectedProperty)
      ))
    })
  })

  describe('Should return correct properties in each complements object inside recipe object', () => {
    test('should return an array with objects that have id property', () => {
      const expectedProperty = "id"

      complements.map(complement => (
        expect(complement).toHaveProperty(expectedProperty)
      ))
    })

    test('should return an array with objects that have name property', () => {
      const expectedProperty = "name"


      complements.map(complement => (
        expect(complement).toHaveProperty(expectedProperty)
      ))
    })

    test('should return an array with objects that have checked property', () => {
      const expectedProperty = "checked"

      complements.map(complement => (
        expect(complement).toHaveProperty(expectedProperty)
      ))
    })

    test('should return an array with objects that have time property', () => {
      const expectedProperty = "time"

      complements.map(complement => (
        expect(complement).toHaveProperty(expectedProperty)
      ))
    })
  })

})
