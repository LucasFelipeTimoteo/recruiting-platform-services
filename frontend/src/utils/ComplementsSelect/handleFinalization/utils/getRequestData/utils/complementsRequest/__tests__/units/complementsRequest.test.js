import ordersMock from '../../../../../../../../../mocks/orders/orders.mock'

describe('complementsRequest returns an array of selected complements array, where any of these arrays have complement objects, and objects only have complement_id property', () => {
  test('should return [[{"complement_id": 1},{"complement_id": 2},{"complement_id": 3}],[{"complement_id": 1},{"complement_id": 2},{"complement_id": 4}]] as serialized value', () => {
    const expected = JSON.stringify([[{ complement_id: 1 }, { complement_id: 2 }, { complement_id: 3 }], [{ complement_id: 1 }, { complement_id: 2 }, { complement_id: 4 }]])

    const parsedComplementsRequest = ordersMock.map(recipe => (
      recipe.complements.map(complement => (
        { complement_id: complement.id }
      ))
    ))
    const serializedParsedComplementsRequest = JSON.stringify(
      parsedComplementsRequest
    )

    expect(serializedParsedComplementsRequest).toBe(expected)
  })
})
