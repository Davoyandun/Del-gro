import {Router} from 'express';
import { postCrop } from '../controllers/crops';
const router = Router()


// Routes
router.post('/',postCrop)
 



export default router