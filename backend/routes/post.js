const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Post = mongoose.model("Post")


router.get('/allpost',(req,res)=>{
    Post.find()
    .sort("-createdAt")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost',(req,res)=>{
    const {author,location,description,photo}=req.body
    if (!author || !description || !photo ||!location){
       return res.status(422).json({error:"Please add all feilds"})
    }
    
    const post=new Post({
        author,
        location,
        description,
        photo

    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports=router