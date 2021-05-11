const parsedRecipesRequest = [{ recipe_id: 1 }, { recipe_id: 2 }]
const parsedComplementsRequest = [
  [{ complement_id: 1 }, { complement_id: 3 }],
  [{ complement_id: 2 }, { complement_id: 3 }]
]

const parsedIngredientsRequest = parsedRecipesRequest.map((recipe, index) => (
  {
    ...recipe,
    complements: parsedComplementsRequest[index]
  }
))

describe('return the concatenated recipe object with complement object that have sabe index. It means both are the same order option', () => {
  test('should return serialized data of {recipe_id: 1, complements: [{ complement_id: 1 }, { complement_id: 3 }]}', () => {
    const expected = JSON.stringify(
      {
        recipe_id: 1,
        complements: [{ complement_id: 1 }, { complement_id: 3 }]
      }
    )

    const firstIngredientRequest = parsedIngredientsRequest[0]
    const serializedFirstIngredientRequest = JSON.stringify(firstIngredientRequest)

    expect(serializedFirstIngredientRequest).toBe(expected)
  })

  test('should return serialized data of {recipe_id: 2, complements: [{ complement_id: 2 }, { complement_id: 3 }]}', () => {
    const expected = JSON.stringify(
      {
        recipe_id: 2,
        complements: [{ complement_id: 2 }, { complement_id: 3 }]
      }
    )

    const firstIngredientRequest = parsedIngredientsRequest[1]
    const serializedFirstIngredientRequest = JSON.stringify(firstIngredientRequest)

    expect(serializedFirstIngredientRequest).toBe(expected)
  })
})
