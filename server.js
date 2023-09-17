const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.PORT || 5000;

//Connect to DB and start Server
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}).catch(err => console.log(err.mongoose)) 
//mongoose.connect("mongodb://127.0.0.1:27017/paymentTracker");