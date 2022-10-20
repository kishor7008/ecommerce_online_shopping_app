const jwt=require('jsonwebtoken')
const geterateToken=(id)=>{
return jwt.sign({id},process.env.JWT_KEY,{
    expiresIn:'30d'

})
}
module.exports=geterateToken