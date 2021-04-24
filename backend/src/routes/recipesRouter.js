const { Router } = require('express')

const {
  getIngredients,
  getLogoIngredients
} = require('../controller/recipesController')


const router = Router()

router.get('/', getIngredients)
router.get('/:id', getLogoIngredients)

module.exports = router