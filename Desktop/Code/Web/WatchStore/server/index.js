const express=require('express')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { connectDB } = require('./src/config/connectDB.js');
const authRouter = require('./src/routes/authRouter.js');
const productRouter = require('./src/routes/productRouter.js');
const brandRouter = require('./src/routes/brandRouter.js');
const colorRouter = require('./src/routes/ColorRouter.js');
const blogRouter = require('./src/routes/blogRouter.js');
const otherRouter = require('./src/routes/otherRouter.js');


//config
dotenv.config();

const app = express();
app.use(cookieParser()); 
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());


//Connect server
const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB()
    console.log("Server run on PORT: ",PORT)
})

app.use("/auth", authRouter);
app.use('/product', productRouter);
app.use('/brand',  brandRouter);
app.use('/color', colorRouter);
app.use('/blog', blogRouter);
app.use('/other', otherRouter);

