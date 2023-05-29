const mongoose = require('mongoose');

const repliesSchema= new mongoose.Schema({
    replyContent:{
        type:String,
        require:true
    },
    date:{
        type:Date, default:Date.now
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required: true
    },
    threadID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'threadsSchema',
        required: true
    },
    
})
const replies=mongoose.model("REPLIES",repliesSchema);
module.exports=replies;