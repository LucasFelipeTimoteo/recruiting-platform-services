const getComplementsTimes = (orders) => {
  const complementsTimesList = orders.map(recipe => (
    recipe.complements.map(complement => complement.time)
  ))

  const complementsTimes = complementsTimesList.reduce(
    (allComplementsTimes, complementTimes) => (
      [...allComplementsTimes, ...complementTimes]
    )
  )

  return complementsTimes
}

export default getComplementsTimes