const express=require('express')
const {createColor} =require('../controller/colorCtrl')
const { authMiddleware, isAdmin } = require('../middleware/authMiddlewares.js');

const router = express.Router();

router.post('/createcolor', authMiddleware, isAdmin, createColor)

module.exports = router;