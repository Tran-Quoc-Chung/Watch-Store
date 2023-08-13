const express=require('express')
const {createBrand,deleteBrand} =require('../controller/brandCtrl')
const { authMiddleware, isAdmin } = require('../middleware/authMiddlewares.js');


const router = express.Router();

router.post('/createbrand', authMiddleware, isAdmin, createBrand)

router.delete('/deletebrand',authMiddleware, isAdmin, deleteBrand)

module.exports = router;