const db = require('../models/index.js');
const { cloudinaryUploadImg } = require('../utils/cloudinary.js')
const fs = require('fs')


const createNewBlog = async (req, res) => {
    try {
        const newBlog = await db.BlogProduct.create(req.body)
        return res.status(200).json({ message: "Create blog product successfully", Blog: newBlog })
    } catch (error) {
        return res.status(400).json({ message: "Create blog failed. Try again!!", err: error.message })
    }
}

const uploadImagesBlog = async (req, res) => {
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
        const blog = await db.BlogProduct.findByPk(id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found." });
        }
        let urlImages = []
        for (let i = 0; i < urls.length; i++) {
            const imgObj = {};
            imgObj[`img${i + 1}`] = urls[i].url;
            urlImages.push(imgObj);
        }
        console.log("urlImages", urlImages)

        await db.BlogProduct.update(
            {
                images: urlImages,
            },
            {
                where: { blog_id: id }
            }
        );
        res.status(200).json({ message: "Upload image successfully " });
    } catch (error) {
        res.status(400).json({ message: "Upload image failed", err: error.message })
    }
}

const getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await db.BlogProduct.findOne({ where: { blog_id: id } });
        if (!blog)
            return res.status(400).json({ message: "Blog not found" });
        return res.status(200).json({ Blog: blog });
    } catch (error) {
        return res.status(400).json({ message: "Get blog failed. Try again!!", err: error.message });

    }
}

const getAllBlog = async (req, res) => {
    try {
        const blog = await db.BlogProduct.findAll({
            include: {
                model: db.User,
                as: 'Author',
                attributes: ['user_id', 'username']
            },
            raw: false
        });

        if (!blog)
            return res.status(400).json({ message: "Blog not found" });

        return res.status(200).json({ Blog: blog });
    } catch (error) {
        return res.status(400).json({ message: "Get blog failed. Try again!!", err: error.message });

    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.body;
        const deleteblog = await db.BlogProduct.destroy({ where: { blog_id: id } })
        if (!deleteblog)
            return res.status(400).json({ message: "Delete blog failed"});
        return res.status(200).json({ message: "Delete blog successfully" });
    } catch (error) {
        return res.status(400).json({ message: "Delete blog failed", err:error.message});

    }
}

module.exports = {
    createNewBlog,
    uploadImagesBlog,
    getBlog,
    getAllBlog,
    deleteBlog
}