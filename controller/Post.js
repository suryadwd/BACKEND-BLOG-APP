const like = require("../models/like");
const comment = require("../models/comment");
const post = require("../models/post");
exports.createPost = async (req, res) => {

  
  try {
    const { title, body } = req.body;

    const newPost = new post({ title, body });

    await newPost.save();

    res.status(200).json({ success: true, message: "done" });
  } catch (error) {
    console.error("Error:", error.message, error.stack);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const all = await post.find().populate("comment");
    res.status(200).json({ success: true, data: all });
  } catch (error) {
    console.error("Error:", error.message, error.stack);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
