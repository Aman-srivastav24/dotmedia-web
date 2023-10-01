import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import {post} from '../models/post.js'
import requirelogin from '../middlewares/requirelogin.js';
//route
router.post("/createPost",requirelogin,(req,res)=>{
    const {body , pic} = req.body;
   if(!body || !pic){
    return res.status(422).json({error:"Pls Add All the feilds"})
   }  
   console.log(req.user);
   const POST = new post({
    body,
    photo:pic,
    postedBy:req.user,
   })
   POST.save().then((result)=>{
    return res.json({post:result})
   }).catch(err=> console.log(err))
})

export default router;