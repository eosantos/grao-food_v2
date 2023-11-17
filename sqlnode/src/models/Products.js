const { Model, DataTypes } = require('sequelize');

class Products extends Model {
  static init(sequelize) {
    super.init({
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image_product: DataTypes.STRING,
      price: DataTypes.REAL      
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Restaurants, { foreignKey: 'restaurant_id', as: 'restaurant' });
  }

}

module.exports = Products;
