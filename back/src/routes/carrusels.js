import { Router } from "express";
import {
  postImg,
  getCarrusel,
  putCarrusel,
  deleteCarrusel,
} from "../controllers/carrusel";
const router = Router();

// Routes
router.post("/", postImg);
router.get("/", getCarrusel);
router.put("/:id", putCarrusel);
router.delete("/:id", deleteCarrusel);

export default router;
