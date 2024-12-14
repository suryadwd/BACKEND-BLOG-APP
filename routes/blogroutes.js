const express = require("express")
const router = express.Router();
const {createComment} = require("../controller/comments")
const {createPost, getAll} = require("../controller/Post")
const {like} = require("../controller/likes")

router.post("/createComment",createComment)
router.post("/createPost",createPost)
router.get("/getAll",getAll)
router.get("/like",like)

module.exports = router;