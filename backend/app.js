const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const authRouter = require("./Router/auth");
const connection = require("../backend/DB/conn");

require("../backend/DB/conn");

app.use(express.json());
// app.use(cors()); // ye use kerna lazmy hy is ky begair server kisy ko b request bhejny nahi deta

// app.use(require('./Router/auth'));

app.use("/", authRouter); // ye use ker ziada better hy

// app.get('/',(req,res)=>{
//     res.send(`hello server`);
// })
// app.get('/signup',(req,res)=>{
//     res.send(`hello server`);
// })
console.log("hello from  app.js");

connection().then(() => {
  app.listen(5000, () => {
    console.log(`Server is running at port No http://localhost:${PORT}`);
  });
}).catch((err)=>{
    console.log(err);
})
