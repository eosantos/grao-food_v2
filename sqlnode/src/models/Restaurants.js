const { Model, DataTypes } = require('sequelize');

class Restaurants extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,      
      sub_name: DataTypes.STRING,
      addresses: DataTypes.STRING,
      image: DataTypes.STRING,
      avatar: DataTypes.STRING,
      telefone: DataTypes.STRING,
      stars: DataTypes.STRING,
      delivery_time: DataTypes.STRING,
    }, {
      sequelize
    })
  }

}

module.exports = Restaurants;