"use strict";

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blogAPI')
.then(()=> console.log('mongoDB connected'))
.catch((err)=> console.log(err))
