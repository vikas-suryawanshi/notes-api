const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");

app.set("view engine","ejs");


main()
.then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notes');
}  
app.get("/",(req,res)=>{
    res.send("root is working");
})

app.listen(port,(req,res)=>{
    console.log("app is listeing on port is 8080");
})
