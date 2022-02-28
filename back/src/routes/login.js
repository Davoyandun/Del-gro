import { Router } from "express";
import { login } from "../controllers/login";
const router = Router();

// Routes

router.get("/", login);


export default router;

