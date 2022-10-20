const mongoose=require('mongoose')

const connectDB=async()=>{
    
    try{
    return mongoose.connect(process.env.MONGO_URL)
    
}
catch{
    console.log('not connected')
}
}
module.exports=connectDB;