import {Router} from 'express';
import {postBrand} from '../controllers/brands';
const router = Router()


// Routes
router.post('/',postBrand)
 



export default router