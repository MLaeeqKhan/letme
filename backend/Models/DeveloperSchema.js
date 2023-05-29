const mongoose=require('mongoose');
// const { default: CreateProfile } = require('../../src/components/CreateProfile');

const developerSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    
    areaOfTech:{
        type:String,
        require:true
    },
    workLinks:[
        {
        link:{
        type:String,
        require:true
    }
}],
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    skills:[{
        skill:{
            type:String,
            require:true
        }
    }],
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required: true

    }
})

const Profile= mongoose.model('PROFILE',developerSchema)
module.exports=Profile;