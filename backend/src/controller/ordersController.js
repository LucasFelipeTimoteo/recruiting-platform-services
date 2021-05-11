const { v4: uuidv4 } = require('uuid');
const OrdersSchema = require('../models/Orders')
const api = require('../services/api');

module.exports.saveNewOrder =  async (req, res) => {
  const { user_id, orders } = req.body

  try {
    await OrdersSchema.validateAsync({ user_id, orders })

    const order_id = uuidv4()
    const newOrderData = {
      id: order_id,
      user_id,
      orders
    }

    const request = await api.post('/orders', newOrderData)
    const savedOrder = request.data

    res.json({ order: savedOrder })
  }
  catch (error) {
    console.log(error)
  }
}