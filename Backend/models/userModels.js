const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxLength:[30,"name cannot exceed 30 character"],
        minLength:[3,"name should more than 3 character"]
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"],

    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minLength:[6,"password should be greater than 6 character"],
        select:false
    },
    avatar: {
        public_id:{
            type:String,
            required:true
        },
          url:{
            type:String,
            required:true
        },
       },
       role:{
        type:String,
        default:"user"
       },
       resetPasswordToken:String,
       resetPasswordExpire:Date
})

userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();

       
    }
    this.password = await bcryptjs.hash(this.password,10);
})

//JWT token
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},"yash sharma",{
        expiresIn:"5d"
    })
}



//compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword,this.password)
}
module.exports = mongoose.model("User",userSchema);