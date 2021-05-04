import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useIngredients() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const response = await api.get('/ingredients')
        const ingredientsData = response.data

        setRecipes(ingredientsData)
      } catch (error) {
        console.log(error)
      }
    }
    
    getIngredients()
  }, [])

  return recipes
}
