import {Router} from 'express';
import { postImg, getCarrusel } from '../controllers/carrusel';
const router = Router()


// Routes
router.post('/',postImg);
router.get('/',getCarrusel)

 



export default router