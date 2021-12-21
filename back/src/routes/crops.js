import { Router } from "express";
import { postCrop, getCrops, putCrop, deleteCrop } from "../controllers/crops";
const router = Router();

// Routes
router.post("/", postCrop);
router.get("/", getCrops);
router.put("/:id", putCrop);
router.delete("/:id", deleteCrop);

export default router;
