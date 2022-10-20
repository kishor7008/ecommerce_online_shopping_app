const express=require('express')
const {getProducts,getProduct}=require('../controllers/productsController')
const router=express.Router();

// get products route
router.route('/products').get(getProducts)

//single product
router.route('/products/:id').get(getProduct)
module.exports=router;