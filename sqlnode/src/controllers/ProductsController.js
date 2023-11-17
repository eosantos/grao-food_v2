const Products = require('../models/Products');
const Restaurants = require('../models/Restaurants');

module.exports = {

  async index(req, res) {
    const { restaurant_id } = req.params;
  
    const restaurant = await Restaurants.findByPk(restaurant_id, {
      include: { association: 'products' }
    });
  
    return res.json(restaurant.products);
  },

  async store(req, res) {
    const { restaurant_id } = req.params;
    const { type, name, description, image_product, price } = req.body;
    
    const restaurant = await Restaurants.findByPk(restaurant_id);

    if (!restaurant) {
      return res.status(400).json({ error: 'Restaurant not found' });
    }
  
    const products = await Products.create({
      type,
      name,
      description,
      image_product,
      price,
      restaurant_id,
    });
  

    return res.json(products);
  }
};