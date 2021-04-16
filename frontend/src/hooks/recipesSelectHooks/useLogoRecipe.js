import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useLogoRecipe() {
  const [logoRecipe, setLogoRecipe] = useState({})

  useEffect(() => {
    const getLogoRecipe = async () => {
      const response = await api.get('/recipes/2')
      const logoRecipeData = response.data
      setLogoRecipe(logoRecipeData)
    }
    getLogoRecipe()
  }, [])

  return {
    logoRecipePath: logoRecipe.recipeImage?.src,
    logoRecipeDescription: logoRecipe.recipeImage?.description,
    logoRecipeName: logoRecipe.recipeName
  }
}
