import express from 'express';
import {user} from '../models/users.js'
import mongoose from 'mongoose';
const router = express.Router();
import bcrypt from 'bcrypt';

router.get('/home',(req,res)=>{
    res.send("Hello World!!");

})

router.post('/signup',(req,res) => {
    const {name , userName , email , password} = req.body;
    if(!name || !email || !userName || !password ){
        return res.status(420).json({
            error:"Please add all the neccessary feild"})
    }
    user.findOne({$or: [{email:email},{userName:userName}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({
                error:"User Already Exist"
            })
        }
        bcrypt.hash(password,12).then((hashedPassword)=>{
            const USER = new user({
                name,
                email,
                userName,
                password: hashedPassword
            })
        
            USER.save()
            .then(USER=>{res.json({message:"Registered successfully"})})
            .catch(err => {console.log(err)})
        })
       
        
    })
    })
   

export default router;
