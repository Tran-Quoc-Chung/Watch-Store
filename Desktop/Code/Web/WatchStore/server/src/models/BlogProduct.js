const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
const Product = require("./Product.js");
const User=require('./User.js')
module.exports = (sequelize, DataTypes) => {
    class BlogProduct extends Model {
        static associate(models) {
            // Thiết lập mối quan hệ "belongsTo" giữa Product và Brand
            BlogProduct.belongsTo(models.User, {
                foreignKey: 'author',    // Trường chứa khóa ngoại trong bảng Product
                targetKey: 'user_id',  // Trường chứa khóa chính trong bảng Brand
                as: 'Author',            // Tên của mối quan hệ trong model Product
            });
        }
    }

    BlogProduct.init(
        {
            blog_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            description: {
                type: DataTypes.JSON,
                allowNull: false
            },
            category: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: User,
                    key: 'user_id',
                },
            },
            images: {
                type: DataTypes.JSON, // Kiểu dữ liệu là JSON (hoặc sử dụng JSONB nếu cần)
                allowNull: true,
            },

        
        },
        {
            sequelize,
            modelName: 'BlogProduct',
            timestamps: true,
        }

    )
    return BlogProduct
}