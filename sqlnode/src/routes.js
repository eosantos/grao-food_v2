const express = require('express');
const UserController = require('./controllers/UserController')
const RestaurantsController = require('./controllers/RestaurantsController')

const routes = express.Router();


routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/restaurants', RestaurantsController.index);
routes.post('/restaurants', RestaurantsController.store);

module.exports = routes;
