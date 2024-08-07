const Errorhandler = require('../HandlingError/errorHandler');


module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Something went wrong';


    //wrong mongo db error
    if(err.name == "CastError"){
        const message = `resource not found invalid ${err.path}`;
        err = new Errorhandler(message , 400)
    }

    res.status(err.statusCode).json({
        success:false,
        error:err.message
    })
}