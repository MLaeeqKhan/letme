const mongoose= require('mongoose')


const categoriesShema=new mongoose.Schema({
categoriesName:{
    type:String,
    requird:true
},
date:{
    type:Date, default: Date.now
},
catDesc:{
    type:String,
    requird:true
},

})

const categories= mongoose.model("CATEGORIES",categoriesShema);
module.exports= categories;