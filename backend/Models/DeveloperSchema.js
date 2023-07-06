//developerSchema.js
const mongoose = require("mongoose");
const developerSchema = new mongoose.Schema({
  profileImg: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },

  areaOfTech: {
    type: String,
    require: true,
  },
  experience: {
    type: String,
    require: true,
  },
  jobType: {
    type: String,
    // require: true,
  },
  cv: {
    type: String,
    required: true,
  },
  
  skills: {
    type: [String],
    required: true,
  },
  languages: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gitHub: {
    type: String,
    require: true,
  },
  linkedin: {
    type: String,
    require: true,
  },
  facebook: {
    type: String,
    require: true,
  },
  twitter: {
    type: String,
    require: true,
  },
  instagram: {
    type: String,
    require: true,
  },
  
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
});

const Profile = mongoose.model("PROFILE", developerSchema);
module.exports = Profile;
