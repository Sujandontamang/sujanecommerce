require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("./db/conn")
const Products=require("./models/productsSchema")
const DefaultData = require("./defaultdata");
app.use(express.json());

port =8005
app.listen(port,()=>{
    console.log(`server is runnung in ${port}`)
})
DefaultData();