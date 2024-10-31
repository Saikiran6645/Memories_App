import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error);
  }
};
export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = PostMessage.create(post);
    res.status(201).json({ message: "post Created" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
