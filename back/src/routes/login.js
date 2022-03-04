import { Router } from "express";
import { login } from "../controllers/login";
const router = Router();

// Routes

router.post("/", login);


export default router;

