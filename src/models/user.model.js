"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

const mongoose = require('mongoose')

const passwordEncrypt = require('../helpers/passwordEncrypt')


// Schema:
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // unique: [true, 'Email must be unique.'],
        // required: true,
        required: [true, 'Email must be required.'],
        // validate: (email) => { return true },
        // validate: [
        //     (email) => {
        //         if (email.includes('@') && email.includes('.')) {
        //             return true
        //         }
        //         return false
        //     },
        //     'Email type is incorrect'
        // ],
      
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password) 
    },

    firstName: String,

    lastName: String,

}, {
    collection: 'user',
    timestamps: true
})

// module.exports = {
//     User: mongoose.model('User', UserSchema)
// }

module.exports = mongoose.model('User', UserSchema)