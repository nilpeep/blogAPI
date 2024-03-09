"use strict"

// BLOG API routes

const router = require('express').Router()

const { BlockList } = require('net')
const {BlogPost} = require('../controllers/blog.controller')

router.route('/posts')
.get(BlogPost.list)
.post(BlogPost.create)

router.route('/posts/:postId')
.get(BlogPost.read)
.put(BlogPost.update)
.delete(BlogPost.delete)

module.exports = router