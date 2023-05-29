const express=require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
require('../DB/conn');
const authenticate= require ('../midleware/authenticate');
const User = require('../Models/UserSchema');


router.get('/',(req,res)=>{
    res.send(`Hello from sever router`);
})
// Signup Router
router.post('/signup',async(req,res)=>{
    console.log("sign up");
    const {email,pass,cPass}=req.body;
    console.log("email auth:"+email);
    if(!email || !pass|| !cPass){
        return res.status(422).json({error:"Please fill the credential:"})
    }
try {
    const userExist = await User.findOne({email:email});
    if(userExist){
        return res.status(422).json({error:"User already exist:"});
    }else if(pass!==cPass){
        return res.status(422).json({error:"Passwords are not match:"})

    }else{
        const user =new User({email,pass,cPass});
        await  user.save();
        res.status(201).json({message:"User Register Successfully:"});
    }
}catch(err){console.log(err)};
});

// Signin Router
router.post('/signin',async(req,res)=>{

    console.log("signin");
try {
    // const token;
    const {email, pass}= req.body;
if(!email || !pass){
   return res.status(400).json({error:"Please fill the credential:"});
}
    const userExist= await User.findOne({email:email});
if(!userExist){
    res.status(400).json({error:"Invalid credientials:"});
}
else{
    const isMatch= await bcrypt.compare(pass,userExist.pass);
   const  token = await userExist.generateAuthToken();
    console.log("token:"+token);

    // cookies
    res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+ 25892000000),
        httpOnly:true
    });
    if(isMatch){
        res.status(200).json({message:"User Signin Successfully:",token});
    }else{
        res.status(400).json({error:"Invalid Credientials:"});
    }
   
}
} catch (error) {
    console.log(error)
}
})

// about us page
router.get('/profile',authenticate,(req,res)=>{
    console.log("Hello from developer profile");
    res.send(req.rootUser);
})
module.exports= router;