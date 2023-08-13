'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BlogProducts', {
      blog_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: DataTypes.JSON,
        allowNull: false
      },
      category: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      images: {
        type: DataTypes.JSON, // Kiểu dữ liệu là JSON (hoặc sử dụng JSONB nếu cần)
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BlogProducts');
  }
};
