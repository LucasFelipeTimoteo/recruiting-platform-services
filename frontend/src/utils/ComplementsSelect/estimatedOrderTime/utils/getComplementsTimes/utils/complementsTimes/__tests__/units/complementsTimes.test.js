const complementsTimesList = [[1, 2], [3, 4]]

describe('Return an array with all values of sub-array values flatted', () => {
  test('should return an serialized array with 1,2,3,4 ("[1,2,3,4]")', () => {
    const expected = "[1,2,3,4]"
    const orderComplementsTimes = complementsTimesList.flat()
    const serializedOrderComplementsTimes = JSON.stringify(orderComplementsTimes)

    expect(serializedOrderComplementsTimes).toBe(expected)
  })
})
