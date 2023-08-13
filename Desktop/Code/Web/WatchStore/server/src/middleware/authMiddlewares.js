const User = require('../models/User')
const jwt = require('jsonwebtoken');
const asyncHandle = require('express-async-handler');
const db =require('../models/index.js')

const authMiddleware = asyncHandle(async (req, res, next) => {
    let token;

    if (req.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_CODE);
                const user = await db.User.findOne({ where: { user_id: decoded.id } })
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not authorization token expired, Please login again!!");
        }
    } else {
        throw new Error("Not authorization ");
    }
});

const isAdmin = asyncHandle(async (req, res, next) => {
    const { email } = req.user;
    const adminUser = await db.User.findOne({where: {email} });
    if (!adminUser.isAdmin) {
        throw new Error("You are not an admin")
    } else {
        next();
    }
})

module.exports={authMiddleware,isAdmin}