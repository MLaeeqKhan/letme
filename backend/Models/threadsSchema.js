const mongoose = require('mongoose');

const threadsSchema= new mongoose.Schema({
    treadTile:{
        type:String,
        required:true
    },
    date:{
        type : Date, default: Date.now
    },
    threadDesc:{
        type:String,
        required:true
    },
      threadCatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'catShema',
        required: true
      },
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userShema',
        required: true
      },
    threadID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoriesShema',
        required: true
    },
    
})

const threads = mongoose.model("THREADS",threadsSchema);
module.exports=threads;