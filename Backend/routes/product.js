const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");
const ErrorHander = require("../HandlingError/errorHandler");
const catchAsyncError = require("../middleware/catchAssyncError"); // Ensure this path is correct
const apiFeatures = require("../HandlingError/apiFeatures");

// Create product --admin
router.post("/createProduct", catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    });
}));

// Get all products
router.get("/getallProducts", catchAsyncError(async (req, res, next) => {
    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const ApiFeatures = new apiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const products = await ApiFeatures.query;

    res.status(200).json({
        success: true,
        products,
        productCount
    });
}));

// Get product details
router.get("/getOneProduct/:id", catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product
    });
}));

// Update product --admin
router.put("/update/:id", catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    });
}));

// Delete product
router.delete("/deleteProduct/:id", catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product deleted"
    });
}));

module.exports = router;
