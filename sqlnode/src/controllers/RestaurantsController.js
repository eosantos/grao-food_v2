const Restaurants = require('../models/Restaurants');

module.exports = {
  async index(req, res) {
    try {
      const restaurants = await Restaurants.findAll();
      return res.json(restaurants);
    } catch (error) {
      console.error("Erro ao buscar restaurantes:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  async store(req, res) {
    try {
      const { name, sub_name, addresses, image, avatar, telefone, stars, delivery_time } = req.body;
      
      const restaurant = await Restaurants.create({ name, sub_name, addresses, image, avatar, telefone, stars, delivery_time });
      
      return res.json(restaurant);
    } catch (error) {
      console.error("Erro ao criar restaurante:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};