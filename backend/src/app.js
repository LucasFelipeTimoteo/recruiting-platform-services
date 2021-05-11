const express = require('express')
const cors = require('cors')

const recipesRouter = require('./routes/recipesRouter')
const usersRouter = require('./routes/usersRouter')
const couponRouter = require('./routes/couponRouter')
const ordersRouter = require('./routes/ordersRouter')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/ingredients', recipesRouter)
app.use('/users', usersRouter)
app.use('/coupon', couponRouter)

app.use('/orders', ordersRouter)

module.exports = app