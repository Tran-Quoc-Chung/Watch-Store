const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
module.exports = (sequelize, DataTypes) => {
    class StrapMaterial extends Model { }

    StrapMaterial.init(
        {
            strapMaterial_id: {
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
            modelName: 'StrapMaterial',
            timestamps: false,
        }
    );
    return StrapMaterial
}