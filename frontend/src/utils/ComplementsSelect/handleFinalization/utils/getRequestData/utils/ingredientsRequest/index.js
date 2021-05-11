const ingredientsRequest = (parsedRecipesRequest, parsedComplementsRequest) => {
  const parsedIngredientsRequest = parsedRecipesRequest.map((recipe, index) => (
    {
      ...recipe,
      complements: parsedComplementsRequest[index]
    }
  ))

  return parsedIngredientsRequest
}

export default ingredientsRequest