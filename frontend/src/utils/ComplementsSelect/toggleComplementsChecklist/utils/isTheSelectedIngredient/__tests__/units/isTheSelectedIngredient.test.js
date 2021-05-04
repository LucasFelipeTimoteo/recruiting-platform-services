const selectedIngredient = 1
const ingredient = 1

const isTheSelectedIngredient = (selectedIngredient, ingredient) => (
  selectedIngredient === ingredient
)

describe('isTheSelectedIngredient check if the id of selected ingredient is equals another ingredient id. It will be used to change "checked" property', () => {
  test('should ', () => {
    const expected = true

    const selected = isTheSelectedIngredient(selectedIngredient, ingredient)

    expect(selected).toBe(expected)
  })
  
})
