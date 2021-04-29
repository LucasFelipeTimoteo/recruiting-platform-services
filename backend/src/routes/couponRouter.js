const { Router } = require('express')
const { gerCoupon } = require('../controller/couponController')

const router = Router()

router.get('/', gerCoupon)

module.exports = router