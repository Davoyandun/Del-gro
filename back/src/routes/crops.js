import { Router } from "express";
import { postCrop, getCrops, putCrops } from "../controllers/crops";
const router = Router();

// Routes
router.post("/", postCrop);
router.get("/", getCrops);
router.put("/:id", putCrops);

export default router;
