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
});

const note=mongoose.model("note",noteSchema);
module.exports= note;