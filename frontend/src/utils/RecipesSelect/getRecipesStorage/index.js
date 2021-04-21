import getLocalStorageData from '../../GLOBAL/getLocalStorageData'

const getRecipesStorage = () => {
  const parsedStorage = getLocalStorageData()
  const selectedRecipes = parsedStorage.selectedRecipes

  return selectedRecipes
}

export default getRecipesStorage