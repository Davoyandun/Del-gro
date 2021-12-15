import {Router} from 'express';
import {postBrand, getBrands} from '../controllers/brands';

const router = Router()


// Routes
router.post('/',postBrand)
router.get('/',getBrands)

 



export default router