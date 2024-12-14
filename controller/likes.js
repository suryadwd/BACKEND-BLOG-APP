const Post = require("../models/post");
const like = require("../models/like");

exports.like = async (req, res) => {
 
  try {
    
    const { post, user } = req.body;
    const userExist = await like.findOne({post, user})

    if(!userExist){

      const newLike = new like({post,user})
      await newLike.save()

      await Post.findByIdAndUpdate(post, {$push:{like:newLike._id}},{new:true})

      res.status(200).json({message:"like the post"})

    }

    else{

      await Post.findByIdAndUpdate(post, {$pull:{like:userExist._id}}, {new:true})
      await like.findByIdAndDelete(userExist);

      res.status(200).json({message:"unlike the post"})

    }

    
  } catch (error) {
    console.error("Error:", error.message, error.stack);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
