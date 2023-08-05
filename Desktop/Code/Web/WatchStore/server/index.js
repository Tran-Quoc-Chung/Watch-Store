import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/dbConnect.js';


//config
dotenv.config();

const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());


//Connect server
const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB()
    console.log("Server run on PORT: ",PORT)
})
