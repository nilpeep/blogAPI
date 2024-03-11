const express = require('express')
const app = express()

/* DB connection  */
require('./src/configs/dbConnection')

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