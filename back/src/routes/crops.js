import {Router} from 'express';
import { postCrop , getCrops} from '../controllers/crops';
const router = Router()


// Routes
router.post('/',postCrop)
router.get('/',getCrops)
 

 

export default router