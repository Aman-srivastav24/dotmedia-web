import express from 'express'
const app = express()
const port = process.env.port || 3000;
import { config } from 'dotenv'
import cors from'cors';
import path from 'path'
import userRouter from './routes/auth.js';
import createPostRouter from './routes/createPost.js'
import userProfileRouter from './routes/userprofile.js'
app.use(cors());


config({
   path:"./config.env"
})
const mongoURI = process.env.MONGO_URI;

import mongoose from 'mongoose';
app.use(express.json())
app.use(userRouter,createPostRouter,userProfileRouter)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected",()=>{
   console.log("Succesfully connected to Mongo")
})
mongoose.connection.on("error",()=>{
   console.log("Not connected to Mongo")
})

//serving the frontend
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname,"./frontend/dist")))

app.get("*",(req,res)=>{
   res.sendFile(
      path.join(__dirname,"./frontend/dist/index.html"),
      function (err){
         res.status(500).send(err);
      }
   )
})
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})