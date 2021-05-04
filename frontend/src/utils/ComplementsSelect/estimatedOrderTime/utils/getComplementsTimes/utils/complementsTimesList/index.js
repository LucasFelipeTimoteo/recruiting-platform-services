const complementsTimesList = (orders) => {
  const orderComplementsTimesList = orders.map(recipe => (
    recipe.complements.map(complement => complement.time)
  ))

  return orderComplementsTimesList
}

export default complementsTimesList