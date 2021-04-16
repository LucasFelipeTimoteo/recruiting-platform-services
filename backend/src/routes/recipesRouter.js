const { Router } = require('express')

const {
  getRecipes,
  getLogoRecipe
} = require('../controller/recipesController')


const router = Router()

router.get('/', getRecipes)
router.get('/:id', getLogoRecipe)

module.exports = router