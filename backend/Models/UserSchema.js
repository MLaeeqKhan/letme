const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { trace } = require('../routers/auth');

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    cPass:{
        type:String,
        required:true
    },
    date:{
        type : Date, default: Date.now
    },
    tokens:[ 
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

userSchema.pre('save',async function(next){
    if(this.isModified('pass')){
        this.pass=await bcrypt.hash(this.pass,12);
        this.cPass=await bcrypt.hash(this.cPass,12);
    }
    next();
});
userSchema.methods.generateAuthToken=async function(){
    try {
        let loginToken = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:loginToken});
        await this.save();
        return loginToken;
    } catch (error) {
        console.log(error);
    }
}
const User = mongoose.model('USER',userSchema);
module.exports= User;