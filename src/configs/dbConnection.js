"use strict";

const mongoose = require('mongoose')

const dbConnection = function(){

    mongoose.connect('mongodb://localhost:27017/blogAPI')
    .then(()=> console.log('mongoDB connected'))
    .catch((err)=> console.log(err))
}


module.exports = {
    mongoose,
    dbConnection
}