const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connectDB.js');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            // Thiết lập mối quan hệ "belongsTo" giữa Product và Brand
            Comment.belongsTo(models.User, {
                foreignKey: 'user_id',    // Trường chứa khóa ngoại trong bảng Product
                targetKey: 'user_id',  // Trường chứa khóa chính trong bảng Brand
                as: 'User',            // Tên của mối quan hệ trong model Product
            });
            Comment.belongsTo(models.Product, {
                foreignKey: 'product_id',    // Trường chứa khóa ngoại trong bảng Product
                targetKey: 'product_id',  // Trường chứa khóa chính trong bảng Brand
                as: 'Product',            // Tên của mối quan hệ trong model Product
            });
        }
     }

    Comment.init(
        {

            comment_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'user_id'
                }
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'products', // Tên bảng mà 'product_id' tham chiếu đến
                    key: 'product_id', // Tên trường khóa chính trong bảng products
                },
                onUpdate: 'CASCADE', // Khi cập nhật product_id, cập nhật tất cả các comment liên quan
                onDelete: 'CASCADE', // Khi xóa product, xóa tất cả các comment liên quan
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,

            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            images: {
                type: DataTypes.JSON,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'Comment',
            timestamps: true
        }
    );
return Comment
}