const express = require("express");
const categories = require("../Models/categoriesSchema");
const threads=require('../Models/threadsSchema')
const replies=require('../Models/Replies');
const router = express.Router();

router.get("/getcategories", async (req, res) => {
  try {
    const category = await categories.find();
    // console.log(category);
    res.json({ category });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

router.get("/getThreads", async (req, res) => {
  try {
    const thread = await threads.find(); 
    // console.log(thread);
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

module.exports = router;
