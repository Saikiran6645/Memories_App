import express from "express";
import { Router } from "express";
import { getPosts,createPost } from "../controllers/postControllers.js";
const postRoute = Router();
postRoute.get("/", getPosts);
postRoute.post("/create", createPost);

export default postRoute;
