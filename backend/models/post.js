import mongoose from "mongoose";
import { ObjectId } from "mongoose";
import { user } from "./users.js";
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required: true,
    },
    photo:{
    type:String,
    default:"No Photo"
    },
    postedBy:{
        type:ObjectId,
        ref:user
    }

})
export  const post = mongoose.model('POST',postSchema);