const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
module.exports = (sequelize, DataTypes) => {
    class Tag extends Model { }

    Tag.init(
        {
            tag_id: {
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
            modelName: 'Tag',
            timestamps: false,
        }
    );
    return Tag
}