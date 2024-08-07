const express = require("express");
const router = express.Router();
const ErrorHander = require("../HandlingError/errorHandler");
const catchAsyncError = require("../middleware/catchAssyncError");
const UserModel = require("../models/userModels");

//Register USer
router.post("/Register",catchAsyncError(async(req,res)=>{
     const {name,email,password} = req.body;

     const user = await UserModel.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample url",
            url:"profilePic"
        }
     });

     res.status(201).json({
        success:true,
        user
    
     })
}))








module.exports = router;