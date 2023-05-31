const mongoose= require('mongoose')
// backend ki file frontend my import nahi ker sakty 
// tu ny ye use kyu kern yhy

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