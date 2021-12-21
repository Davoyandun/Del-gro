import {Router} from 'express';
import {postProduct, getProducts, putProducts} from '../controllers/products'
const router = Router()


// routes
router.post('/', postProduct);
router.get('/', getProducts);
router.put('/:id', putProducts)





export default router 