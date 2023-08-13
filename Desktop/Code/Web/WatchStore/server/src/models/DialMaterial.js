const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
module.exports = (sequelize, DataTypes) => {
    class DialMaterial extends Model { }

    DialMaterial.init(
        {
            dialMaterial_id: {
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
            modelName: 'DialMaterial',
            timestamps: false,
        }
    );
    return DialMaterial
}