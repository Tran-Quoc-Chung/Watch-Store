const db = require('../models/index.js');
const { Op } = require("sequelize");
const { cloudinaryUploadImg } = require('../utils/cloudinary.js')
const fs = require('fs')

const createProduct = async (req, res) => {
  try {
    const newProduct = await db.Product.create(req.body)
    res.status(200).json({ message: "Create product successfully", product: newProduct })
  } catch (error) {
    res.status(404).json({ message: "Create product failed", err: error.message })
  }
}
const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await db.Product.findOne({
      where: { product_id: id },
      include: [
        {
          model: db.Brand,
          as: 'Brand', // Tên của mối quan hệ trong model Product
          attributes: ['name', 'origin'] // Lựa chọn trường name của bảng Color
        },
        {
          model: db.Gender,
          as: 'Gender',
          attributes: ['name']
        },
        {
          model: db.DialColor,
          as: 'DialColor',
          attributes: ['name']
        },
        {
          model: db.DialMaterial,
          as: 'DialMaterial',
          attributes: ['name']
        },
        {
          model: db.DialSize,
          as: 'DialSize',
          attributes: ['name']
        },
        {
          model: db.MachineAndPower,
          as: 'MachineAndPower',
          attributes: ['name']
        },
        {
          model: db.Tag,
          as: 'Tag',
          attributes: ['name']
        },
        {
          model: db.WaterResistance,
          as: 'WaterResistance',
          attributes: ['name']
        },
      ],
      raw: false

    })
    if (!product) {
      res.status(404).json({ message: "Product not found" })
      return;
    }
    return res.status(200).json(product)
  } catch (error) {
    return res.status(404).json({ message: "Get product failed", err: error.message })
  }
}

const getAllProducts = async (req, res) => {
  const queryObj = { ...req.query };
  const excludeFields = ["page", "sort", "limit", "fields"];
  excludeFields.forEach((el) => delete queryObj[el]);

  let whereClause = { ...queryObj };
  Object.keys(whereClause).forEach((key) => {
    if (whereClause[key] === "") {
      delete whereClause[key];
    }
  });

  // sort
  let order = [["createdAt", "DESC"]];
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").map((item) => item.split(":"));
    order = sortBy.map((item) => (item[1] === "desc" ? [item[0], "DESC"] : [item[0], "ASC"]));
  }

  // limit and pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  console.log(limit)
  const offset = (page - 1) * limit;

  // fields
  const attributes = req.query.fields
    ? req.query.fields.split(",").map((field) => field.trim())
    : ["product_id", "name", "price", "createdAt", "updatedAt"]; // Default fields to select

  try {
    const productCount = await db.Product.count({
      where: whereClause,
    });

    const products = await db.Product.findAll({
      attributes,
      where: whereClause,
      order,
      limit,
      offset,
    });

    res.status(200).json({
      total: productCount,
      perPage: limit,
      currentPage: page,
      totalPages: Math.ceil(productCount / limit),
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products." });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.body;
    const product = await db.Product.findOne({ where: { product_id } });
    if (!product) {
      res.status(400).json({ message: "Product not found" });
      return;
    }
    await db.Product.destroy({ where: { product_id } });
    res.status(200).json({ message: "Delete product successfully" })

  } catch (error) {
    res.status(404).json({ message: "Delete product failed", err: error.message })
  }
}

const uploadImages = async (req, res) => {
  const { id } = req.params;
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "image");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      urls.push(newpath);
      fs.unlinkSync(path)
    }
    const product = await db.Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    // Update the images field of the product using Sequelize
    await db.Product.update(
      {
        images: urls,
      },
      {
        where: { product_id: id }
      }
    );
    res.status(200).json({ message: "Upload image successfully ", product: product });
  } catch (error) {
    res.status(400).json({ message: "Upload image failed", err: error.message })
  }
}

const postComment = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { id } = req.params;
    const { content, rating } = req.body;
    const images = req.files;
    let urls = [];

    const product = await db.Product.findOne({ where: { product_id: id } });
    const user = await db.User.findOne({ where: { user_id } });
    if (!product || !user) {
      res.status(400).json({ message: "Not found user or product" })
      return;
    }

    if (images) {
      const uploader = (path) => cloudinaryUploadImg(path, "image");
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newpath = await uploader(path);
        urls.push(newpath);
        fs.unlinkSync(path)
      }
    }
    const existComment = await db.Comment.findOne({ where: { product_id: id, user_id: user_id } });
    if (existComment) {
      await db.Comment.update(
        { content, rating, images: urls || "" },
        { where: { product_id: id, user_id: user_id } }
      );
    } else {
      await db.Comment.create({
        user_id,
        product_id: id,
        content,
        rating,
        images: urls || ""
      })
    }

    const commentCount = await db.Comment.findAll({ where: { product_id: id } });
    let totalRating = 0;
    for (let i = 0; i < commentCount.length; i++) {
      totalRating = totalRating + commentCount[i].rating
    }
    const newRating = totalRating / commentCount.length
    await db.Product.update({
      totalrating: newRating
    }, { where: { product_id: id } });

    console.log(totalRating, commentCount.length, newRating, id)


    res.status(200).json({ message: "Post comment successfully" })

  } catch (error) {
    res.status(400).json({ message: "Post comment failed", err: error.message })
  }

}
const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const allComment = await db.Comment.findAll({ where: { product_id: id } })
    if (allComment) {
      res.status(200).json({ allcomment: allComment })
    } else {
      res.status(200).json({ allcomment: "No comment " })
    }
  } catch (error) {
    res.status(400).json({ message: "get comment failed", err: error.message })
  }
}

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.user;
    const { content, rating } = req.body
    const product = await db.Product.findOne({ where: { product_id: id } });
    const user = await db.User.findOne({ where: { user_id } });

    if (!user || !product) {
      res.status(404).json({ message: "User or product not exist" });
      return;
    }
    if (!content || !rating) {
      res.status(404).json({ message: "Content or rating is required" });
      return;
    }
    const existCommentByUSer = await db.Comment.findOne({ where: { product_id: id, user_id: user_id } });
    if (existCommentByUSer) {
      const updateComment = await db.Comment.update({
        content: content,
        rating: rating
      }, {
        where: {
          product_id: id,
          user_id: user_id
        }
      });
      res.status(200).json({ message: "Update comment successfully", comment: updateComment })
    } else {
      postComment();
    }

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Delete comment failed", err: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { id } = req.params;
    await db.Comment.destroy({ where: { user_id: user_id, product_id: id } });
    return res.status(200).json({ message: "Delete comment successfully" })
  } catch (error) {
    return res.status(400).json({ message: "Delete comment failed.Try again!!", err: error.message });
  }
}

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  deleteProduct,
  uploadImages,
  postComment,
  getComment,
  updateComment,
  deleteComment
}