const { Router } = require('express')
const routes = new Router()

const recipesController = require('./controllers/recipesController')

routes.get('/recipes/', recipesController.index)

module.exports = routes
