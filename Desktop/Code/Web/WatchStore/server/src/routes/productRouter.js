const express=require('express')
const {createProduct,getProduct,getAllProducts,deleteProduct,uploadImages,postComment,getComment,updateComment,deleteComment}=require('../controller/productCtrl.js');
const { authMiddleware ,isAdmin} = require('../middleware/authMiddlewares.js');
const { uploadPhoto, productImgResize } = require('../middleware/uploadImages.js');

const router = express.Router();


router.post('/createproduct', authMiddleware, isAdmin, createProduct);
router.post('/postcomment/:id', authMiddleware,uploadPhoto.array("images", 10), postComment);


router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 10), uploadImages);
router.put("/comment/updatecomment/:id", authMiddleware, uploadPhoto.array("images", 10), updateComment);

router.get('/getproduct/:id', getProduct)
router.get('/getcomment/:id', getComment)

router.get('/',getAllProducts)


router.delete('/deleteproduct', authMiddleware, isAdmin, deleteProduct)
router.delete('/deletecomment/:id', authMiddleware, deleteComment)




module.exports = router;