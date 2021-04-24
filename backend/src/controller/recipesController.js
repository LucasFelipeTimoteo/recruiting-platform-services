const api = require("../services/api")

module.exports.getIngredients = async ({ res }) => {
  try {
    const request = await api.get('/ingredients')
    const ingredients = request.data

    res.json(ingredients)
  }
  catch (error) {
    res.status(404).json({ error })
  }
}

module.exports.getLogoIngredients = async (req, res) => {
  try {
    const id = req.params.id
    const request = await api.get(`/ingredients/${id}`)
    const ingredientData = request.data

    const ingredientImage = ingredientData.image
    const ingredientName = ingredientData.name
    const ingredient = {ingredientName, ingredientImage}

    res.json(ingredient)
  }
  catch (error) {
    res.status(404).json({ error })
  }
}