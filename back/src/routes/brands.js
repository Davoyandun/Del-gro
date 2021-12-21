import { Router } from "express";
import { postBrand, getBrands, putBrand, deleteBrand } from "../controllers/brands";

const router = Router();

// Routes
router.post("/", postBrand);
router.get("/", getBrands);
router.put("/:id", putBrand);
router.delete("/:id", deleteBrand);


export default router;
