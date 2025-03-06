require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db & listening on port 4000!!!')
        })
    })
    .catch((error) => {
        console.log(error)
    })


