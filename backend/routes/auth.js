import express from 'express';
import {user} from '../models/users.js'
import mongoose from 'mongoose';
const router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import requirelogin from '../middlewares/requirelogin.js'
config({
    path:"./config.env"
 })

const jwt_Secret = process.env.jwt_secrets;

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

    router.post('/signin',(req,res)=>{
        const {email , password} =req.body;
        if(!email || !password){
            return res.status(422).json({
                error:"Please add email and password"
            })
        }
        user.findOne({ email: email }).then((savedUser)=> {
            if(!savedUser){
                return res.status(422).json({
                    error:"Invalid email"
                })
            }
            bcrypt.compare(password,savedUser.password).then((match)=>{
                if(match){
                    // return res.status(200).json({
                    //     message:"Signed in Successfully"
                    // })
                    const token = jwt.sign({_id:savedUser.id},jwt_Secret)
                    const {_id,name,email,userName,followers,followings} = savedUser
                   res.json({token,user:{_id,name,email,userName,followers,followings}})
                    console.log(token);          
                      }
                    else{
                        return res.status(422).json({
                            error:"Invalid Password"
                        })
                    }
                
            })
            .catch(err=> console.log(err))
        })
    })
   

export default router;
