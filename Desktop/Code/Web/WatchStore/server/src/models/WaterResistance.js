const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
module.exports = (sequelize, DataTypes) => {
    class WaterResistance extends Model { }

    WaterResistance.init(
        {
            waterResistance_id: {
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
            modelName: 'WaterResistance',
            timestamps: false,
        }
    );
    return WaterResistance
}