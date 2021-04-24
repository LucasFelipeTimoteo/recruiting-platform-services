const toggleComplementsChecklist = (
  recipesChecklist,
  selectedComplement,
  currentRecipe
) => {
  const newComplementsChecklist = recipesChecklist.map(recipe => {
    if(!recipe.checked){
      return recipe
    } 

    recipe.complements.map(complement => {
      if(selectedComplement.id === complement.id && recipe.id === currentRecipe.id ){
        complement.checked = !complement.checked
      }

      return complement
    })

    return recipe
  })

  return newComplementsChecklist
}

export default toggleComplementsChecklist
