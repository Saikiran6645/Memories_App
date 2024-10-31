import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  tag: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  SelectedFile: String,
  created: {
    type: Date,
    default: new Date(),
  },
});
const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
