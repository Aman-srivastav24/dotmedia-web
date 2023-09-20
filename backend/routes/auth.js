import express from 'express';
import {user} from '../models/users.js'
import mongoose from 'mongoose';
const router = express.Router();

router.get('/home',(req,res)=>{
    res.send("Hello World!!");

})

router.post('/signup',(req,res) => {
    const {name , userName , email , password} = req.body;
    if(!name || !email || !userName || !password ){
        res.status(420).json({error:"Please add all the neccessary feild"})
    }
    user.findOne({$or: [{email:email},{userName:userName}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({
                error:"User Already Exist"
            })
        }
        const USER = new user({
            name,
            email,
            userName,
            password
        })
    
        USER.save()
        .then(USER=>{res.json({message:"saved successfully"})})
        .catch(err => {console.log(err)})
        
    })
    })
   

export default router;
