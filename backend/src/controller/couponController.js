const api = require('../services/api')

module.exports.getCoupon = async ({ res }) => {
  try {
    const response = await api.get('/coupon')
    const couponData = response.data

    res.json(couponData)
  } catch (error) {
    res.status(404).json(error)
  }
}