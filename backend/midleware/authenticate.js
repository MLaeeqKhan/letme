const jwt=require("jsonwebtoken");
const User= require("../Models/UserSchema");


const Authenticate=async(req,res,next)=>{
    try{
        const token= req.cookies.jwtoken;
        const verifyToken= jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){throw new Error('User no Found')}
        req.token= token;
        req.rootUser=rootUser;
        req.rootUser=rootUser._id;

}catch(err){
    res.status(401).send('Unauthorized: No token provided');
    console.log(err);

}
}

module.exports=Authenticate