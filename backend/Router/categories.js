// controller files
const express = require("express");
const router = express.Router();
const categories = require("../Models/categoriesSchema");
const threads=require('../Models/threadsSchema')
const replies=require('../Models/Replies');
const developers = require('../Models/DeveloperSchema');


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

// getDeveloper
//controller.js file
try {
  router.get("/getDeveloper",async(req,res)=>{
    const developer= await developers.find();
    res.json({developer});
    });
} catch (error) {
  console.log("Error:",error);
}

// // Search endpoint

const levenshteinDistance = (a, b) => {
  const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) {
    distanceMatrix[0][i] = i;
  }

  for (let j = 0; j <= b.length; j++) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1,
        distanceMatrix[j - 1][i] + 1,
        distanceMatrix[j - 1][i - 1] + indicator
      );
    }
  }

  return distanceMatrix[b.length][a.length];
};

router.get('/search', async (req, res) => {
  const searchText = req.query.text; // Get the search text from the query parameter

  try {
    const allThreads = await threads.find(); // Retrieve all threads from the database

    // Filter the threads based on the search text using Levenshtein distance
    const filteredThreads = allThreads.filter((thread) => {
      const titleDistance = levenshteinDistance(searchText.toLowerCase(), thread.threadTile.toLowerCase());
      const descDistance = levenshteinDistance(searchText.toLowerCase(), thread.threadDesc.toLowerCase());

      const titleSimilarity = 1 - (titleDistance / Math.max(searchText.length, thread.threadTile.length));
      const descSimilarity = 1 - (descDistance / Math.max(searchText.length, thread.threadDesc.length));

      return titleSimilarity >= 0.5 || descSimilarity >= 0.5;
    });

    res.json(filteredThreads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




router.put("/updateThread/:id", async (req, res) => {
  const { id } = req.params;
  const { threadTitle, threadDesc } = req.body;
  try {
    let updateFields = {};
    if (threadTitle) {
      updateFields.threadTile = threadTitle;
    }
    if (threadDesc) {
      updateFields.threadDesc = threadDesc;
    }
    const updatedThread = await threads.findByIdAndUpdate(id, updateFields, { new: true });
    res.json({ thread: updatedThread });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Delete a thread by ID
router.delete("/deleteThread/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await threads.deleteOne({ _id: id });
    res.sendStatus(204); // No Content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete replies by thread ID
router.delete("/deleteReplies/:threadID", async (req, res) => {
  const { threadID } = req.params;
  console.log('threadID:', threadID);
  try {
    await replies.deleteMany({ threadID: threadID });
    res.sendStatus(204); // No Content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// update reply status
router.put("/updateReply/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedReply = await replies.findByIdAndUpdate(id, { status }, { new: true });
    res.json({ reply: updatedReply });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
});

// Update developer profile
// Update developer profile
const updateProfile = async (req, res) => {
  try {
    // Get the developer's user ID from the authenticated user
    const userID = req.user.id;

    // Find the developer in the database based on the user ID
    const developer = await developers.findOneAndUpdate(
      { userID },
      req.body.developerData,
      { new: true }
    );

    if (!developer) {
      // If developer is not found, return an error
      return res.status(404).json({ message: "Developer not found." });
    }

    res.status(200).json({ message: "Developer profile updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update developer profile." });
  }
};

module.exports = {
  // ...
  updateProfile,
};


module.exports = router;
