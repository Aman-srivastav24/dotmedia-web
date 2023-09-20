import express from 'express'
const app = express()
const port = 3000
import { config } from 'dotenv'
import cors from'cors'
app.use(cors());


config({
   path:"../backend/config.env"
})
const mongoURI = process.env.MONGO_URI;

import mongoose from 'mongoose';
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