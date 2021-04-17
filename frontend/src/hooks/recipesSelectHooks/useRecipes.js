import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const response = await api.get('/recipes')
      const recipesData = response.data

      setRecipes(recipesData)
    }
    getRecipes()
  }, [])

  return recipes
}
