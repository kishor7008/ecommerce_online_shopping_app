const Product=require('../models/productModel')
const asyncHandeler=require('express-async-handler')

const getProducts = asyncHandeler(async (req, res) => {
    const products = await Product.find({});
    // throw new Error("Some Eror");
    res.json(products);
  });
  
  const getProduct = asyncHandeler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  });
  
  module.exports = { getProducts, getProduct };