"use strict";

// BLOG API CONTROLLERS

require("express-async-errors")
const {BlogPost} = require('../models/blogModel')

module.exports.BlogPost={
    list: async(req,res)=>{
        const data=await BlogPost.find()
        res.status(200).send({
            error:false,
            data:data,

        })
    },
    create:async(req,res)=>{
        const data=await BlogPost.create(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            data:data
        })
    },
    update:async(req,res)=>{
        const data=await BlogPost.updateOne(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            data:data
        })
    },
    read: async(req,res) =>{
        const data= await BlogPost.find({_id:req.params.postId})
        res.status(202).send({
            error:false,
            data:data
        })
    },
    delete: async(req,res) =>{
        const data = await BlogPost.deleteOne({_id: req.params.postId})
        // console.log(data)

        res.sendStatus((data.deletedCount>=1) ? 204:404)
}
}
