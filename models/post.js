const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

  title:{
    type:String,
    require:true
  },

  body:{
    type:String,
    require:true,
  },

  like:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"like"
  }],

  comment:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"comment"
  }],

})

module.exports = mongoose.model("post",postSchema)

