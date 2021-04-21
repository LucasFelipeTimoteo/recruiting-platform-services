import getLocalStorageData from '../../GLOBAL/getLocalStorageData'

const setRecipesStorage = (recipesChecklist) => {
  const parsedStorage = getLocalStorageData()
  const selectedRecipes = recipesChecklist.filter(recipe => recipe.checked)
  const newStorage = JSON.stringify({ ...parsedStorage, selectedRecipes })

  localStorage.setItem('SMART_COFFEE', newStorage)
}

export default setRecipesStorage