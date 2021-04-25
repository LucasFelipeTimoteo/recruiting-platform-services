const { Router } = require('express')

const {
  getSingleUser,
  saveNewUser
} = require('../controller/usersController');

const router = Router()

router.get('/:id', getSingleUser)
router.post('/', saveNewUser)

module.exports = router