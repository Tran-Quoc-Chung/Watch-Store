// file: models/Brand.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
const User=require('./User.js')
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            // Thiết lập mối quan hệ "belongsTo" giữa Product và Brand
            Cart.belongsTo(models.User, {
                foreignKey: 'user_id',    // Trường chứa khóa ngoại trong bảng Product
                targetKey: 'user_id',  // Trường chứa khóa chính trong bảng Brand
                as: 'User',            // Tên của mối quan hệ trong model Product
            });
        }
     }

    Cart.init(
        {
            Cart_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: User,
                    key: 'user_id',
                },
                
            },
        },
        {
            sequelize,
            modelName: 'Cart',
            timestamps: false,
        }
    );
    return Cart
}
