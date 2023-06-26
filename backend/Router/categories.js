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

// Search endpoint
router.get('/search', async (req, res) => {
  const searchText = req.query.text; // Get the search text from the query parameter

  try {
    // Perform the text search using $or operator on threadTitle and threadDesc fields
    const thread = await threads.find({
      $or: [
        { threadTile: { $regex: searchText, $options: 'i' } },
        { threadDesc: { $regex: searchText, $options: 'i' } }
      ]
    });

    res.json(thread);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// // Get all threads
// router.get('/getThreads', async (req, res) => {
//   try {
//     const thread = await threads.find();
//     res.json({ thread });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


module.exports = router;
