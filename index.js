"use strict";
const express = require('express')
const app = express()

/* DB connection  */

const mongoose = require('mongoose')

const MONGODB = process.env.MONGO

mongoose.connect('mongodb://localhost:27017/blogAPI')
.then(()=> console.log('mongoDB connected'))
.catch((err)=> console.log(err))


/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require('cookie-session')
app.use(session({
    secret:process.env.SECRET_KEY, // this is a required option if you are using encrypted sessions
    // name: 'mySession', // cookie name dictates the key name used in the cookies jar
    keys: ['key1', 'key2'], // an array of any number of keys to use for encryption and signing. 
    // // maxAge:1000 * 60 * 60 * 24 * 3, // how long (in ms) until the session will expire
    // secure: false, // only set this to true on production if your app is behind HTTPS
    // resave: false, // don't automatically save session changes to the client
    // saveUninitialized: true, //  don't automatically create new sessions
}))

app.all('/', (req,res)=>{
    res.send()
})


app.use(express.json()) // yukarıda  kalsın



require('dotenv').config()
const PORT=process.env.PORT
const HOST=process.env.HOST

app.all('/',(req,res)=>{
    res.send('WELCOME BLOG API PROJECT')
})

app.use('/user', require(`./src/routes/user.router`))

app.use('/blog',require('./src/routes/blog.router'))


app.use(require('./src/middlewares/errorHandler')) // aşağıda kalsın

app.listen(PORT,()=> console.log(` Server Running on http://${HOST}:${PORT}`))

// require('./src/sync')()