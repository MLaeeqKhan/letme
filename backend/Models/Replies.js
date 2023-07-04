const mongoose = require('mongoose');

const repliesSchema= new mongoose.Schema({
    replyContent:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    date:{
        type:Date, default:Date.now
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },
    threadID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'THREADS',
        required: true
    },
    threadUserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'THREADS',
        required: true
    },
    userEmail: {
        type: String,
        ref: 'USER',
        required: true
      }
    
})
const replies=mongoose.model("REPLIES",repliesSchema);
module.exports=replies;