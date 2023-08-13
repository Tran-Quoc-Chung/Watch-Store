const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyToken = (id, email,token) => {
    try {
       // console.log("from verify ",id, email,token)
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_CODE);
            console.log("decoded",decoded.id)
            return decoded.id === id && decoded.email === email;
        } else {
            return "Token not found"
        }
    } catch (error) {
        return false;
    }
}

module.exports={verifyToken}