import mongoose from "mongoose";
const {ObjectId} =mongoose.Schema.Types
const userSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},
userName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
Photo:{
    type:String,
},
thought:{
    type:String,
},
followers:[{type:ObjectId , ref:"user"}],
followings :[{type:ObjectId , ref:"user"}],

})

export  const user = mongoose.model('USER',userSchema);
