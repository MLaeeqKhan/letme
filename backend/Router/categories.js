const express = require("express");
const categories = require("../Models/categoriesSchema");
const threads=require('../Models/threadsSchema')
const replies=require('../Models/Replies');
const developers = require('../Models/DeveloperSchema');
const router = express.Router();

router.get("/getcategories", async (req, res) => {
  try {
    const category = await categories.find();
    res.json({ category });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

router.get("/getThreads", async (req, res) => {
  try {
    const thread = await threads.find(); 
    res.json({ thread });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

router.get("/getReplies", async (req, res) => {
  try {
    const reply = await replies.find(); 
    // console.log(thread);
    res.json({ reply });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

try {
  router.get("/getDeveloper",async(req,res)=>{
    const developer= await developers.find();
    res.json({developer});
    });
} catch (error) {
  console.log("Error:",error);
}


module.exports = router;
