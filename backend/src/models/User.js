const joi = require('joi')

const schema = joi.object({
  fullName: joi.string().min(2).max(220).required(),
  email: joi.string().email().max(500).required(),
})

module.exports = schema