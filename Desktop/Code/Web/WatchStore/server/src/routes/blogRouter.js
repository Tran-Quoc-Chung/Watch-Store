const express=require('express')
const {createNewBlog,uploadImagesBlog,getBlog,getAllBlog,deleteBlog}=require('../controller/blogCtrl')
const { authMiddleware, isAdmin } = require('../middleware/authMiddlewares.js');
const { uploadPhoto, productImgResize } = require('../middleware/uploadImages.js');

const router = express.Router();

router.post('/createblog', authMiddleware, isAdmin, createNewBlog);

router.get('/getblog/:id', getBlog);
router.get('/', getAllBlog);

router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 10), uploadImagesBlog);


router.delete('/deleteblog',authMiddleware, isAdmin,deleteBlog)
module.exports = router;
