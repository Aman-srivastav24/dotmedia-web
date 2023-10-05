import express from 'express'
const app = express()
const port = 3000
import { config } from 'dotenv'
import cors from'cors';


import userRouter from '../backend/routes/auth.js'
import createPostRouter from '../backend/routes/createPost.js'
import userProfileRouter from '../backend/routes/userprofile.js'
app.use(cors());


config({
   path:"../backend/config.env"
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



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})