import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useThumbnail() {
  const [logoIngredient, setLogoIngredient] = useState({})

  useEffect(() => {
    const getlogoIngredient = async () => {
      const response = await api.get('/ingredients/2')
      const logoIngredientData = response.data
      setLogoIngredient(logoIngredientData)
    }
    getlogoIngredient()
  }, [])

  return {
    logoIngredientPath: logoIngredient.ingredientImage?.src,
    logoIngredientDescription: logoIngredient.ingredientImage?.description,
    logoIngredientName: logoIngredient.ingredientName,
  }
}
