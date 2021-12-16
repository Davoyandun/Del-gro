import {Router} from 'express';
import { postCarrusel, getCarrusel } from '../controllers/carrusel';
const router = Router()


// Routes
router.post('/',postCarrusel);
router.get('/',getCarrusel)

 



export default router