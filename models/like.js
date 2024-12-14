const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({

  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post",
  },

  user:{
    type:String,
    require:true,
  }
})

module.exports = mongoose.model("like",likeSchema)
