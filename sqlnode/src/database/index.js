const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Restaurants = require('../models/Restaurants');


const connection = new Sequelize(dbConfig);

User.init(connection);
Restaurants.init(connection);

module.exports = connection;