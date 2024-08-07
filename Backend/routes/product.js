const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");
const ErrorHander = require("../HandlingError/errorHandler");
const catchAsyncError  = require("../middleware/catchAssyncError");
const apiFeatures = require("../HandlingError/apiFeatures");


//create product --admin
router.post("/createProduct",catchAsyncError( async (req, res) => {
  
        const product = await Product.create(req.body);
        res.status(200).json({
            success: true,
            product
        });
    
}))


//getall product
router.get("/getallProducts",async(req,res)=>{
   const ApiFeatures = new apiFeatures(Product.find(), req.query).search().filter()
    const products = await ApiFeatures.query;

    res.status(200).json({
        success:true,
        products
    })
})


//get Product details
router.get("/getOneProduct/:id",async(req,res)=>{
    let product = await Product.findById(req.params.id);


    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
      }

      res.status(200).json({
        success:true,
        product
    })
})

//update product --admin
router.put("/update/:id",async (req,res)=>{
    let product = await Product.findById(req.params.id);


    if(!product){
        return next(new ErrorHander("not updated product",404))
    }
     product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
     })

     res.status(200).json({
        success:true,
        product
     })
})


//delete product
router.delete("/deleteProduct/:id",async (req,res)=>{
      const product = await Product.findById(req.params.id);

      if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
      }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"product deleted"
    })
})

module.exports = router;
