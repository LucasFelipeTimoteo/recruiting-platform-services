import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useThumbnail() {
  const [thumbnailIngredient, setThumbnailIngredient] = useState({})

  useEffect(() => {
    const getThumbnailIngredient = async () => {
      const response = await api.get('/ingredients/2')
      const thumbnailIngredientData = response.data
      setThumbnailIngredient(thumbnailIngredientData)
    }
    getThumbnailIngredient()
  }, [])

  return {
    thumbnailIngredientPath: thumbnailIngredient.ingredientImage?.src,
    thumbnailIngredientDescription: thumbnailIngredient.ingredientImage?.description,
    thumbnailIngredientName: thumbnailIngredient.ingredientName,
  }
}
