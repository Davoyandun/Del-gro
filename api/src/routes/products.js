import {Router} from 'express';
import {postProduct, getProducts} from '../controllers/products'
const router = Router()


// routes
router.post('/', postProduct);
router.get('/', getProducts)




export default router 