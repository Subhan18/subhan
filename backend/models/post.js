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
    }
})

mongoose.model("Post",postSchema)