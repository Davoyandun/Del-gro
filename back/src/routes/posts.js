import { Router } from "express";
import { postPosts, getPosts, putPost, deletePost } from "../controllers/posts";
const router = Router();

// Routes
router.post("/", postPosts);
router.get("/", getPosts);
router.put("/:id", putPost);
router.delete("/:id", deletePost);

export default router;
