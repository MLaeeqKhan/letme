const mongoose = require('mongoose');

const db = process.env.DATABASE;
console.log("db",db);
const connection = async () => {
  try {
    await mongoose.connect(db);
    console.log(`DB connection successful`);
  } catch (err) {
    console.error(err);
  }
};


module.exports = connection;
