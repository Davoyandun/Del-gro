import { Router } from "express";
import { postBrand, getBrands, putBrands } from "../controllers/brands";

const router = Router();

// Routes
router.post("/", postBrand);
router.get("/", getBrands);
router.put("/:id", putBrands);

export default router;
