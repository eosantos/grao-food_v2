const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Restaurants = require('../models/Restaurants');
const Products = require('../models/Products');


const connection = new Sequelize(dbConfig);

User.init(connection);
Restaurants.init(connection);
Products.init(connection)

Restaurants.associate(connection.models);
Products.associate(connection.models);

module.exports = connection;