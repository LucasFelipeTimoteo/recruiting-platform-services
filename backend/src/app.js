const express = require('express')
const cors = require('cors')

const recipesRouter = require('./routes/recipesRouter')
const usersRouter = require('./routes/usersRouter')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/ingredients', recipesRouter)
app.use('/users', usersRouter)

module.exports = app