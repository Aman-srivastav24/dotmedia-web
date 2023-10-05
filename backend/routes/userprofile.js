import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import { post } from '../models/post.js'
import {user} from '../models/users.js'

 router.get("/user/:id",async(req,res)=>{
    try {
        const userDetails = await user.findOne({ _id: req.params.id }).select("-password");
        
        const userPosts = await post.find({ postedBy: req.params.id })
          .populate("postedBy", "_id")
          .exec();
    
        if (!userDetails) {
          return res.status(404).json({ error: "User not found" });
        }
    
        res.status(200).json({ user: userDetails, post: userPosts });
      } catch (err) {
        return res.status(422).json({ error: err });
      }
 })
export default router;