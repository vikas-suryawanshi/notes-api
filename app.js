const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const Note=require("./models/note.js");
const note = require("./models/note.js");

app.set("view engine","ejs");

// monggose connect
main()
.then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notes');
}

// add info for understanding add or not
// const Note1=new note({
//     author:"vikas",
//     title:"devlopment",
//     content:"i am learning a fullstack web devlopment by apna college",
//     created_at:new Date()
// });

// Note1.save().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

app.get("/",(req,res)=>{
    res.send("root is working");
})

app.listen(port,(req,res)=>{
    console.log("app is listeing on port is 8080");
})
