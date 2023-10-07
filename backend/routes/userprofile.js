import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import { post } from '../models/post.js'
import {user} from '../models/users.js'
import requirelogin from '../middlewares/requirelogin.js';


//to get user Profile 
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

 //to follow user

 router.put("/follow", requirelogin, async (req, res) => {
  try {
    // Update the user being followed by adding the follower's ID
    await user.findByIdAndUpdate(req.body.followId, {
      $push: { followers: req.user._id },
    });

    // Update the current user's "followings" by removing the target user's ID
    const updatedUser = await user.findByIdAndUpdate(
      req.user._id,
      {
        $push: { followings: req.body.followId },
      },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

 //unfollow user

 router.put("/unfollow", requirelogin, async (req, res) => {
  try {
    // Update the user being followed by adding the follower's ID
    await user.findByIdAndUpdate(req.body.followId, {
      $pull: { followers: req.user._id },
    });

    // Update the current user's "followings" by removing the target user's ID
    const updatedUser = await user.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { followings: req.body.followId },
      },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

// to upload Profile Pic
try{
router.put("/uploadProfilePic" , requirelogin ,async(req,res) =>{
  console.log("Hihihi im here also")
  const uploadpicUrl= await user.findByIdAndUpdate(req.user._id,{
    $set:{Photo:req.body.pic}
  },
  {
    new:true
  })

  if(uploadpicUrl){
    console.log(uploadpicUrl)
    res.json(uploadpicUrl)
  }
  
})}catch(error){
    res.status(422).json({error:error.message})
}
export default router;