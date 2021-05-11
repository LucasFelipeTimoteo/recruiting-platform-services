import ordersMock from '../../../../../../../../../mocks/orders/orders.mock'

describe('Returns an array of objects, where the object have the id of selected recipe inside a prop called recipe_id', () => {
  test('should return the serialized data of [{ recipe_id: 1 }, { recipe_id: 2 }]', () => {
    const expected = JSON.stringify([{ recipe_id: 1 }, { recipe_id: 2 }])

    const parsedRecipesRequest = ordersMock.map(recipe => (
      { recipe_id: recipe.id }
    ))
    const serializedParsedRecipesRequest = JSON.stringify(parsedRecipesRequest)

    expect(serializedParsedRecipesRequest).toBe(expected)
  })
})