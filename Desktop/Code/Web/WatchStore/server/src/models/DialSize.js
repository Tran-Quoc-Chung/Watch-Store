const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
module.exports = (sequelize, DataTypes) => {
    class DialSize extends Model { }

    DialSize.init(
        {
            dialSize_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'DialSize',
            timestamps: false,
        }
    );
    return DialSize
}