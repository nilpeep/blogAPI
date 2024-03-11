"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

const mongoose = require('mongoose')

// Schema :

const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true,
        trim:true,
        unique:true
    },
    password: { 
        type: String, 
        trim:true,
        required: true
    },
    firstName:String,
    lastName:String

}, {
        // settings
        collection:'user',
        timestamps:true
})

module.exports = mongoose.model('User', UserSchema)