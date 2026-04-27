const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const Note=require("./models/note.js");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));

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

// intialize databse
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

// index route
app.get("/notes",async(req,res)=>{
    let notes=await Note.find();
    res.render("index.ejs",{notes});
})


// crete a new notes
// get form routes
app.get("/notes/new",(req,res)=>{
    res.render("new.ejs");
})


app.get("/",(req,res)=>{
    res.send("root is working");
})

app.listen(port,(req,res)=>{
    console.log("app is listeing on port is 8080");
})
