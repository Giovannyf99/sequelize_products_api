'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.hasMany(models.Order_items, {
        
      });
    }
  }
  Products.init({
    prduct_name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return Product;
};