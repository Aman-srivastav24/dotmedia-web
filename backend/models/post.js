import mongoose from "mongoose";
import { ObjectId } from "mongoose";
import { user } from "./users.js";
const postSchema = new mongoose.Schema({
   
    body:{
        type:String,
        required: true
    },
    photo:{
    type:String,
    required:true
    },
    likes:[{
        type:ObjectId,
        ref:user
    }],
    postedBy:{
        type:ObjectId,
        ref:user
    }

})
export  const post = mongoose.model('POST',postSchema);