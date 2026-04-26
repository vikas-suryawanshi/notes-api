const mongoose=require("mongoose");

const noteSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        maxlength: 50,
    },
    content:{
        type:String,
    },
    created_at:{
        type:Date,
        required:true
    },
});

const note=mongoose.model("note",noteSchema);
module.exports= note;