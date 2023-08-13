const db = require('../models/index.js');
const { createToken, createTokenForgotPassword } = require('../config/createToken.js')
const { verifyToken } = require("../config/verifyToken.js");
const bcrypt = require('bcrypt');
const sendEmail = require('./emailCtrl.js');


const register = async (req, res) => {
    try {
        console.log('db', db)
        const { username, email, password, isAdmin } = req.body
        if (!username || !email || !password) {
            res.status(404).json("Not valid ")
            return;
        }
        const existingUser = await db.User.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: "Email already registered." });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.User.create({
            username,
            email,
            password: hashedPassword,
            isAdmin
        });
        console.log("isadmin", isAdmin)

        res.json({ message: "Register successfully", user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to register user." });
    }

}
const login = async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await db.User.findOne({ where: { email } });
    if (!userInfo) {
        res.status(404).json({ message: "Email not exist" });
        return;
    }
    const checkMatchPassword = bcrypt.compareSync(password, userInfo.password);
    if (!checkMatchPassword) {
        res.status(400).json({ message: "Password is wrong. Try again!!" })
        return
    } else {
        const token = createToken(userInfo.user_id, userInfo.isAdmin)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.status(200).json({ message: "Login successfully", token: token })
    }
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await db.User.findOne({ where: { email } })
    if (!user) throw new Error("User not found with this email");

    try {
        const token = createTokenForgotPassword(user.user_id, user.email);
        const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:3030/auth/resetpassword/${user.user_id}/${token}'>Click Here</>`;
        const data = {
            to: email,
            text: "Hey User",
            subject: "Forgot Password Link",
            html: resetURL,
        };
        sendEmail(data);
        res.json(token);
    } catch (error) {
        res.json(error)
        throw new Error(error);
    }
}

const resetPassword = async (req, res) => {
    try {
        const { id, token } = req.params;
        const user = await db.User.findOne({ where: { user_id: id } });
        if (!user || !id || !token) {
            res.status(400).json({ message: "User or token not found" });
            return;
        }
        const checkToken = verifyToken(user.user_id, user.email, token);
        if (!checkToken) {
            res.status(400).json({ message: "Error from token or user info" })
        } else {
            const { newPassword } = req.body;
            const reset = await db.User.update({
                password: newPassword
            }, {
                where: {
                    user_id: user.user_id
                }
            }
            );
            if (!reset) {
                res.status(400).json({ message: "Reset password failed" });
                return;
            }
            res.status(200).json({ message: "Reset password successfully" })
        }


    } catch (error) {
        res.status(400).json({ message: "Reset password failed", err: error.message })
    }
}

const addToCart = async (req, res) => {
    try {
        const { user_id } = req.user;
        const { product_id, quantity } = req.body;
        const user = await db.User.findOne({ where: { user_id } });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
            
        }
        const [cart, created] = await db.Cart.findOrCreate({
            where: { user_id: user_id },
        });

        const product =await  db.Product.findOne({ where: { product_id } });
        if (!product) {
            return res.status(400).json({ message: "Product not exist" });
            
        }
        let newQuantity =  product.quantity - quantity;
        if (newQuantity < 0) {
            return res.status(400).json({ message: "Product is out of store" });
            
        }
        await db.Product.update({
            quantity: newQuantity,
            sold:product.sold+quantity
        },{where:{product_id}})
        const cartItem = await db.CartItem.create({
            cart_id: cart.Cart_id,
            product_id: product_id,
            quantity: quantity,
        });

        res.status(200).json({ message: "Product added to cart successfully" });
    } catch (error) {
        res.status(400).json({ message: "Add to cart failed", err: error.message });
    }
}

const deleteProductFromCart = async (req, res) => {
    try {
        const { product_id } = req.body;
        const { user_id } = req.user;
        const user = await db.User.findOne({ where: { user_id: user_id } });
        const product = await db.Product.findOne({ where: { product_id } });
        if (!user || !product) {
            res.status(400).json({ message: "User or product not found" });
            return;
        }
        const userCart = await db.Cart.findOne({ where: { user_id } })
        if (!userCart) {
            res.status(400).json({ message: "Not found cart user" });
        }
        await db.CartItem.destroy({ where: { cart_id: userCart.Cart_id, product_id } });
        res.status(200).json("Delete product from cart successfully.")
    } catch (error) {
        res.status(400).json({ message: "Delete product from cart failed. Try again!", err: error.message })
    }
}

const getCartUser = async (req, res) => {
    try {
        const { user_id } = req.user;
        const user = await db.User.findOne({ where: { user_id: user_id } });
        if (!user) {
            res.status(400).json({ message: "User not found." });
            return;
        }
        const cart = await db.Cart.findOne({ where: { user_id: 1 } });
        if (!cart) {
            res.status(400).json("User cart not exist");
        }

        const cartItems = await db.CartItem.findAll({
            where: { cart_id: cart.Cart_id },
            include: {
                model: db.Product,
                as: 'Product',
                attributes: ['name', 'images','price']
            },
            raw:false
        })
        res.status(200).json({ Usercart: cartItems })
    } catch (error) {
        res.status(400).json({ message: "Get user cart failed.", err: error.message });
    }
}


module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword,
    addToCart,
    deleteProductFromCart,
    getCartUser
}