const Post = require("../models/post");
const comment = require("../models/comment");


exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const newComment = new comment({ post, user, body });
    await newComment.save();

    const updateCommentInPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comment: newComment._id } },
      { new: true }
    );

    res.status(201).json({ success: true, data: newComment });
  } catch (error) {
    console.error("Error:", error.message, error.stack);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
