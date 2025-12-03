require("dotenv").config();

const express=require("express")
const connectDB=require("./src/config/dataBase.js")
const authRoute=require("./src/routes/authRoutes.js")
const jwt=require("jsonwebtoken")
