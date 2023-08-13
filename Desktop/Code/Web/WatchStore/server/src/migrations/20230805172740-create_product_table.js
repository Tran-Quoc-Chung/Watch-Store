'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tag: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'tags'
          },
          key: 'tag_id'
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalrating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      brand: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'brands'
          },
          key: 'brand_id'
        },
        allowNull: false
      },
      machineAndPower: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'machineandpowers'
          },
          key: 'MachineAndPowers_id'
        },
      },
      strapMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'strapmaterials'
          },
          key: 'strapMaterial_id'
        },
      },
      dialMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'dialmaterials'
          },
          key: 'dialMaterial_id'
        },
      },
      gender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'genders'
          },
          key: 'gender_id'
        },
      },
      dialShape: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'dialshapes'
          },
          key: 'dialshape_id'
        },
      },
      dialSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'dialsizes'
          },
          key: 'dialsize_id'
        },
      },
      dialColor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'dialcolors'
          },
          key: 'dialcolor_id'
        },
      },
      waterResistance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'waterresistance'
          },
          key: 'WaterResistance_id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
