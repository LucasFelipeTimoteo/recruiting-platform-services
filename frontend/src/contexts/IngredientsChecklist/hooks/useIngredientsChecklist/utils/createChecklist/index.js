const createChecklist = (ingredients) => {
  const checklist = ingredients?.map(recipe => {
    const newRecipeChecklistItem = { ...recipe, checked: false }
    const complementsChecklist = newRecipeChecklistItem.complements?.map(complement => (
      { ...complement, checked: false }
    ))

    const newChecklist = {
      ...newRecipeChecklistItem,
      complements: complementsChecklist
    }

    return newChecklist
  })

  return checklist
}

export default createChecklist