import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useThumbnail() {
  const [thumbnailRecipe, setThumbnailrecipe] = useState({})

  useEffect(() => {
    const getThumbnailRecipe = async () => {
      const response = await api.get('/recipes/2')
      const thumbnailRecipeData = response.data
      setThumbnailrecipe(thumbnailRecipeData)
    }
    getThumbnailRecipe()
  }, [])

  return {
    thumbnailRecipePath: thumbnailRecipe.recipeImage?.src,
    thumbnailRecipeDescription: thumbnailRecipe.recipeImage?.description,
    thumbnailRecipeName: thumbnailRecipe.recipeName
  }
}
