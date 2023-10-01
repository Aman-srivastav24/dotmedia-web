import { user } from '../models/users.js'
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config({
    path: "../backend/config.env"
})

const jwt_Secret = process.env.jwt_secrets;

const requirelogin = (req, res, next) => {

    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must logged in" })
    }
    const token = authorization.replace("Bearer", "").trim();
    jwt.verify(token, jwt_Secret, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must logged in 2" })
        }
        const {_id} = payload
        user.findById(_id).then(userData =>{
            req.user = userData
            next();

        })

    })
   
}
export default requirelogin;