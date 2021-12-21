import { Router } from "express";
import { postImg, getCarrusel, putCarrusel } from "../controllers/carrusel";
const router = Router();

// Routes
router.post("/", postImg);
router.get("/", getCarrusel);
router.put("/:id", putCarrusel);

export default router;
