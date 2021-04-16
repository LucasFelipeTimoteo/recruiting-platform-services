const api = require("../services/api")

module.exports.getRecipes = async ({ res }) => {
  try {
    const request = await api.get('/recipes')
    const recipes = request.data

    res.json(recipes)
  }
  catch (error) {
    res.status(404).json({ error })
  }
}

module.exports.getLogoRecipe = async (req, res) => {
  try {
    const id = req.params.id
    const request = await api.get(`/recipes/${id}`)
    const recipeData = request.data

    const recipeImage = recipeData.image
    const recipeName = recipeData.name
    const recipe = {recipeName, recipeImage}

    res.json(recipe)
  }
  catch (error) {
    res.status(404).json({ error })
  }
}