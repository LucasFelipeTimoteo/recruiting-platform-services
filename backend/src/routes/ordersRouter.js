const { Router } = require('express')
const { saveNewOrder } = require('../controller/ordersController');

const router = Router()

router.post('/', saveNewOrder)

module.exports = router