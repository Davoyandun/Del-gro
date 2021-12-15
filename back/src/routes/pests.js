import {Router} from 'express';
import { postPest, getPests } from '../controllers/pests';
const router = Router()


// Routes
router.post('/',postPest)
router.get('/',getPests)
 



export default router