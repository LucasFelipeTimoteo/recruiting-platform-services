const { Router } = require('express')
const { getCoupon } = require('../controller/couponController')

const router = Router()

router.get('/', getCoupon)

module.exports = router