const joi = require('joi')

const complements = joi.array().items(
  joi.object({
    complement_id: joi.number().required()
  })
)

const recipes = joi.array().items(
  joi.object({
    recipe_id: joi.number().required(),
    complements
  })
)

const schema = joi.object({
  user_id: joi.string().uuid().required(),
  orders: joi.object({
    totalTime: joi.number().required(),
    recipes
  })
})

module.exports = schema