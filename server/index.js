import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import userRouter from "./route/user.route.js";

// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import multer from "multer";
// import { v2 as cloudinary } from "cloudinary";

const app = express()
app.use(cors())
// app.options('*', cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

const PORT = process.env.PORT

app.get("/",(request,response)=>{
    // server to client
    response.json({
        message : "Server Is Running at PORT : " + PORT
    })
})

app.use('/api/user', userRouter)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server Is Running:", PORT);
    })
})