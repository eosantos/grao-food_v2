const express = require('express');
const UserController = require('./controllers/UserController')
const RestaurantsController = require('./controllers/RestaurantsController');
const ProductsController = require('./controllers/ProductsController');

const routes = express.Router();


routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/restaurants', RestaurantsController.index);
routes.post('/restaurants', RestaurantsController.store);

routes.get('/restaurants/:restaurant_id/products', ProductsController.index);
routes.post('/restaurants/:restaurant_id/products', ProductsController.store);
routes.get('/products', ProductsController.getAllProducts);

module.exports = routes;
