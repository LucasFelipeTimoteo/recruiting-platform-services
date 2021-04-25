const { v4: uuidv4 } = require('uuid');
const api = require('../services/api')
const UserSchema = require('../models/User');

module.exports.getSingleUser = async (req, res) => {
  const id = req.params.id
  
  try {
    const response = await api.get(`/users/${id}`)
    const userData = response.data

    res.json(userData)
  } catch (error) {
    res.status(404).json({ error: 'Invalid user id' })
  }
}

module.exports.saveNewUser = async (req, res) => {
  const { fullName, email } = req.body

  try {
    await UserSchema.validateAsync({ fullName, email })

    const id = uuidv4()
    const newUserdata = {
      id,
      fullName,
      email
    }

    const response = await api.post('/users', newUserdata)

    res.json(id)
  } catch (error) {
    res.status(401).json({ error: error.details[0].message })
  }
}