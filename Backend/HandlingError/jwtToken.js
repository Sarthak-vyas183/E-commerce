const sendToken = (user,statusCode ,res)=>{
    const token = user.getJWTToken();


    //options for cookies
    const option ={
        expires:new Date(
            Date.now() +   5*24*60*60*1000

        ),
        httpOnly:true
    }
    res.status(statusCode).cookie("token",token, option).json({
        success:true,
        user,
        token
    })


}

module.exports = sendToken