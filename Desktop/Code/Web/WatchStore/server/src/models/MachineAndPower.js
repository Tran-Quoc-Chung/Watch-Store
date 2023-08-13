const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
module.exports = (sequelize, DataTypes) => {
    class MachineAndPower extends Model { }

    MachineAndPower.init(
        {
            MachineAndPowers_id: {
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
            modelName: 'MachineAndPower',
            timestamps: false,
        }
    );
    return MachineAndPower
}