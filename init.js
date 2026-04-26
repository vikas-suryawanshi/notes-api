const mongoose=require("mongoose");

const Note=require("./models/note.js");

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


const allNotes=[
    {
        author:"akash",
        title:"bcs",
        content:"i am learning a bachelors of computer sciences from mgm college ",
        created_at:new Date()
    },
    {
        author:"omkar",
        title:"computer science",
        content:"i am learning a computer sciences from mgm college ",
        created_at:new Date()
    },
    {
        author:"omkar",
        title:"computer science",
        content:"i am learning a computer sciences from sggs college ",
        created_at:new Date()
    }
]

Note.insertMany(allNotes);