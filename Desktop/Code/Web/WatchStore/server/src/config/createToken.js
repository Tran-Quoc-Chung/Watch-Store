const jwt = require('jsonwebtoken')

const createToken = (id, isAdmin) => {
    return jwt.sign({ id,isAdmin }, process.env.JWT_CODE, { expiresIn: "1d" });
}
const createTokenForgotPassword = (id,email) => {
    return jwt.sign({ id,email }, process.env.JWT_CODE, { expiresIn: "10m" });
}
module.exports={createToken,createTokenForgotPassword}