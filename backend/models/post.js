const mongoose=require("mongoose")

const postSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    date: 
    { 
        type: Date ,default:new Date}
},
    {timestamps:true}
);

mongoose.model("Post",postSchema)