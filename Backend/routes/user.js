const express = require("express");
const router = express.Router();
const ErrorHander = require("../HandlingError/errorHandler");
const catchAsyncError = require("../middleware/catchAssyncError");
const UserModel = require("../models/userModels");
const sendToken = require("../HandlingError/jwtToken");

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

     sendToken(user,201,res);                //from jwtToken file

}))



//Login user
router.post("/Login",async(req,res,next)=>{
    const {email,password} = req.body;

    //if user has given password and email both check

    if(!email || !password){
        return next(new ErrorHander("please Enter Email and Password",400))
    }
    const user = await UserModel.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHander("Invalid email or password",401))
    }

    const isPasswordMAtched = user.comparePassword(password);
    if(!isPasswordMAtched){
        return next(new ErrorHander("Invalid email or password",401))
    }

   sendToken(user,200,res);                         //jwtToken file
})








module.exports = router;