// file: models/User.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
const Product = require('./Product.js')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
          }
     }

    User.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue:false
            }
        },
        {
            sequelize,
            modelName: 'User',
            timestamps: false, // Tắt tự động thêm các trường timestamps (createdAt, updatedAt)
        }
    );
    return User;
}
