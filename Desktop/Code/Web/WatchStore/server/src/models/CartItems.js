// file: models/Brand.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
const Cart = require('./Cart.js')
const User = require('./User.js')
const Product=require('./Product.js')
module.exports = (sequelize, DataTypes) => {
    class CartItem extends Model { 
        static associate(models) {
            // Thiết lập mối quan hệ "belongsTo" giữa Product và Brand
            CartItem.belongsTo(models.Cart, {
                foreignKey: 'cart_id',    // Trường chứa khóa ngoại trong bảng Product
                targetKey: 'Cart_id',  // Trường chứa khóa chính trong bảng Brand
                as: 'Cart',            // Tên của mối quan hệ trong model Product
            });
            CartItem.belongsTo(models.Product, {
                foreignKey: 'product_id',    // Trường chứa khóa ngoại trong bảng Product
                targetKey: 'product_id',  // Trường chứa khóa chính trong bảng Brand
                as: 'Product',            // Tên của mối quan hệ trong model Product
            });
            
        }
    }

    CartItem.init(
        {
            Cartitem_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            cart_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Cart,
                    key: 'cart_id',
                },
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Product,
                    key: 'product_id',
                },
            },
            quantity: {
                type: DataTypes.INTEGER,
                defaultValue:1
            },

        },
        {
            sequelize,
            modelName: 'CartItem',
            timestamps: false,
        }
    );
    return CartItem
}
