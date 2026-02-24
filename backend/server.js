const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://mongodb:27017/ecommerce";

mongoose.connect(MONGO_URI)
.then(()=>console.log("Mongo Connected"))
.catch(err=>console.log(err));

app.get("/api/health",(req,res)=>{
  res.send("Backend Healthy");
});

app.get("/api/products",(req,res)=>{
  res.json([
    {id:1,name:"Laptop"},
    {id:2,name:"Phone"}
  ]);
});

app.listen(5000,()=>console.log("Backend running"));
