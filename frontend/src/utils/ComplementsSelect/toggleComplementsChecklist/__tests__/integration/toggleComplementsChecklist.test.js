import toggleComplementsChecklist from '../..'
import recipesMock from '../../../../../mocks/recipes/recipes.mock'

const currentRecipe = { id: 1 }
const selectedComplement = { id: 2 }

describe('If recipe is not the selected one, return it. If recipe and your complement is the selected one, toggle the "checked" boolean value, else, return the complement', () => {
  test('toggleComplementsChecklist should toggle "checked" property to true', () => {
    const expected = { checked: true }

    const newRecipesList = toggleComplementsChecklist(
      recipesMock,
      selectedComplement,
      currentRecipe
    )

    const toggledComplement = (
      newRecipesList[currentRecipe.id - 1]
        .complements[selectedComplement.id - 1]
    )

    expect(toggledComplement).toMatchObject(expected)
  })
})
