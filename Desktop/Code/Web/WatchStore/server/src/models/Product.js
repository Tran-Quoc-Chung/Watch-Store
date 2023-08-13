// file: models/Product.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
const Brand = require('./Brand.js');
const DialColor = require('./DialColor.js');
const DialSize = require('./DialSize.js');
const DialShape = require('./DialShape.js');
const Tag = require('./Tag.js');
const waterResistance = require('./WaterResistance.js');
const dialMaterial = require('./DialMaterial.js');
const strapMaterial=require('./StrapMaterial.js');
const machineAndPower = require('./machineAndPower.js');
const gender=require('./Gender.js')



module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            // Thiết lập mối quan hệ "belongsTo" giữa Product và Brand
            Product.belongsTo(models.Brand, {
                foreignKey: 'brand',    
                targetKey: 'brand_id', 
                as: 'Brand',            
            });
            Product.belongsTo(models.Tag, {
                foreignKey: 'tag',   
                targetKey: 'tag_id',  
                as: 'Tag',            
            });
            Product.belongsTo(models.Gender, {
                foreignKey: 'gender',    
                targetKey: 'gender_id',  
                as: 'Gender',            
            });
            Product.belongsTo(models.MachineAndPower, {
                foreignKey: 'machineAndPower',    
                targetKey: 'MachineAndPowers_id',  
                as: 'MachineAndPower',            
            });
            Product.belongsTo(models.StrapMaterial, {
                foreignKey: 'strapMaterial',    
                targetKey: 'strapMaterial_id',  
                as: 'StrapMaterial',            
            });
            Product.belongsTo(models.DialMaterial, {
                foreignKey: 'dialMaterial',    
                targetKey: 'dialMaterial_id',  
                as: 'DialMaterial',            
            });
            Product.belongsTo(models.DialShape, {
                foreignKey: 'dialShape',    
                targetKey: 'dialShape_id',  
                as: 'DialShape',            
            });
            Product.belongsTo(models.DialSize, {
                foreignKey: 'dialSize',    
                targetKey: 'dialSize_id',  
                as: 'DialSize',            
            });
            Product.belongsTo(models.DialColor, {
                foreignKey: 'dialColor',    
                targetKey: 'dialColor_id',  
                as: 'DialColor',            
            });
            Product.belongsTo(models.WaterResistance, {
                foreignKey: 'waterResistance',    
                targetKey: 'waterResistance_id',  
                as: 'WaterResistance',            
            });
        }
    }

    Product.init(
        {
            product_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tag: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:Tag ,
                    key: 'tag_id',
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            images: {
                type: DataTypes.JSON, // Kiểu dữ liệu là JSON (hoặc sử dụng JSONB nếu cần)
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
            machineAndPower: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:machineAndPower ,
                    key: 'MachineAndPower_id',
                },
            },
            strapMaterial: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:strapMaterial ,
                    key: 'strapMaterial_id',
                },
            },
            dialMaterial: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:dialMaterial ,
                    key: 'dialMaterial_id',
                },
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:gender ,
                    key: 'gender_id',
                },
            },
            dialShape: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:DialShape ,
                    key: 'dialShape_id',
                },
            },
            dialSize: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:DialSize ,
                    key: 'dialSize_id',
                },
            },
            dialColor: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:DialColor ,
                    key: 'dialColor_id',
                },
            },
            waterResistance: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model:waterResistance ,
                    key: 'waterResistance_id',
                },
            },
            brand: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Brand,
                    key: 'brand_id',
                },
            }
        },
        {
            sequelize,
            modelName: 'Product',
            timestamps: true,
        }
    );


    return Product
}
