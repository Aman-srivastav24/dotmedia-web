import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import {post} from '../models/post.js'
import requirelogin from '../middlewares/requirelogin.js';
//route
router.post("/createPost",requirelogin,(req,res)=>{
    const {title , body} = req.body;
   if(!title || !body){
    return res.status(422).json({error:"Pls Add All the feilds"})
   }  
   console.log(req.user);
   const POST = new post({
    title,
    body,
    postedBy:req.user,
   })
   POST.save().then((result)=>{
    return res.json({post:result})
   }).catch(err=> console.log(err))
})

export default router;