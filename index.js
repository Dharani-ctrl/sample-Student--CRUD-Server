// packages Initialize
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

// Import external files

// const studentRoutes = require('./Routes/studentRoutes')
// server app express to  start
const app= express();

// Middleware
app.use(express)
app.use(express.json());

// DB Connect 
mongoose 
    .connect(process.env.MongoDB_URL)
    .then(()=> console.log("MongoDB Connected"))
    .catch(mongoose.Error, ("Mongo Connection error"))

const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})
