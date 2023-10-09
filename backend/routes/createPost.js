import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import { post } from '../models/post.js'

import requirelogin from '../middlewares/requirelogin.js';
//route
router.get("/allposts", requirelogin, (req, res) => {
    post.find().populate("postedBy", "_id name Photo userName").populate("comments.postedBy", "_id userName").sort("-createdAt")
    .then(posts => res.json(posts)).catch(err => console.log(err))
})
router.post("/createPost", requirelogin, (req, res) => {
    const { body, pic } = req.body;
    if (!body || !pic) {
        return res.status(422).json({ error: "Pls Add All the feilds" })
    }
    console.log(req.user);
    const POST = new post({
        body,
        photo: pic,
        postedBy: req.user,
    })
    POST.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))
})

router.get("/myposts", requirelogin, (req, res) => {
    post.find({ postedBy: req.user._id }).populate("comments.postedBy", "_id userName").
        populate("postedBy", "_id userName name").sort("-createdAt")
        .then(myposts => {
            res.json(myposts);
        }).catch(err => {
            console.log(err)
        })
})

//like section route

router.put("/like", requirelogin, async (req, res) => {
    try {
        const updatelike = await post.findByIdAndUpdate(req.body.postId, {
            $push: { likes: req.user._id }
        }, {
            new: true
        }).populate("postedBy", "_id userName name Photo")
        if (!updatelike) {
            return res.status(422).json("network error")

        } else {

            res.json(updatelike);
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' })
    }
})
router.put("/unlike", requirelogin, async (req, res) => {
    try {
        const updatelike = await post.findByIdAndUpdate(req.body.postId, {
            $pull: { likes: req.user._id }
        }, {
            new: true
        }).populate("postedBy", "_id userName name Photo")
        if (!updatelike) {
            return res.status(422).json("Network error")

        } else {

            res.json(updatelike);
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' })
    }
})
router.put("/comments", requirelogin, async (req, res) => {

    try {
        const comment = {
            comment: req.body.text,
            postedBy: req.user._id
        }
        const updateComment = await post.findByIdAndUpdate(req.body.postId, {
            $push: { comments: comment }
        }, {
            new: true
        }).populate("comments.postedBy", "_id userName Photo")
            .populate("postedBy", "_id userName Photo")
        if (!updateComment) {
            return res.status(422).json("Network error")

        } else {

            res.json(updateComment);
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' })
    }
})


//Api to del Post
router.delete("/delete/:postId", requirelogin, async (req, res) => {
    try {


        const delPost = await post.findOne({ _id: req.params.postId }).populate("postedBy", "_id");
        if (!delPost) {
            return res.status(404).json({ error: "Post not found" })
        }
        if (delPost.postedBy._id.toString() === req.user._id.toString()) {
            delPost.deleteOne().then(result => {
                return res.json({ message: "Successfully Deleted" })
            }).catch((err) => {
                console.log(err)
            })

        } else {
            console.log("Network Error")
        }
    } catch (error) {
        console.log(error)
    }
})
// to show only following posts

router.get("/myfollowingPost", requirelogin, (req, res) => {
    post.find({ postedBy: { $in: req.user.followings } }).populate("postedBy", "_id userName name").
    populate("comments.postedBy", "_id userName name").then(posts => {
        res.json(posts)
    }).catch(err => {
        console.log(err)
    })
})
export default router;