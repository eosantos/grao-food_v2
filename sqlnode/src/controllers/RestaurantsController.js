const Restaurants = require('../models/Restaurants');

module.exports = {
  async index(req, res) {
    const restaurants = await Restaurants.findAll();

    return res.json(restaurants);
  },

  async store(req, res) {
    const { name, sub_name, addresses, image, avatar, telefone, stars,delivery_time } = req.body;

    const restaurant = await Restaurants.create({ name, sub_name, addresses, image, avatar, telefone, stars, delivery_time });

    return res.json(restaurant);
  }
};