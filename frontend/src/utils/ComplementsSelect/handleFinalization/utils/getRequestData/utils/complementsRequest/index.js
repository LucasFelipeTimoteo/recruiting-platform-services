const complementsRequest = (orders) => {
  const parsedComplementsRequest = orders.map(recipe => (
    recipe.complements.map(complement => (
      { complement_id: complement.id }
    ))
  ))

  return parsedComplementsRequest
}

export default complementsRequest