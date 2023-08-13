const express=require('express')
const { register, login, forgotPassword, resetPassword, addToCart,deleteProductFromCart,getCartUser } = require('../controller/authCtrl');
const { authMiddleware ,isAdmin} = require('../middleware/authMiddlewares.js');

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/resetpassword', forgotPassword)
router.post('/addtocart',authMiddleware,addToCart)

router.put('/resetpassword/:id/:token', resetPassword);

router.get('/getusercart', authMiddleware, getCartUser);

router.delete('/deletecart',authMiddleware,deleteProductFromCart)

module.exports = router; 