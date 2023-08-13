'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CartItem', {
      Cartitem_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Cart'
          },
          key: 'cart_id'
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Products'
          },
          key: 'product_id'
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CartItem');
  }
};
