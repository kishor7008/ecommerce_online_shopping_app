const express = require('express')
const products = require('./data/products')
const product=require('./data/products')
const dotenv=require('dotenv')
const connectDB=require('./config/config')
const productRoute=require('./routes/productRoute')
const { errorHandler } = require("./middlewares/errorMiddleWares");
const userRoutes=require('./routes/userRoute')
const orderRoutes=require('./routes/orderRoute')
// dotenv congig
dotenv.config();
const cors=require('cors')
const app=express()
app.use(express.json())
connectDB()
app.use(cors())
app.get('/',(req,res)=>{
    res.send('<h1>welcome</h1>')
})
app.use("/api",productRoute)
app.use("/user",userRoutes)
app.use("/orders",orderRoutes)
app.get('/api/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})
app.use(errorHandler)
const PORT=8080
app.listen(process.env.PORT || PORT,()=>{
    console.log(`server started ` )
})