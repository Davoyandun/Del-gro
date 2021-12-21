import {Router} from 'express';
import {postProduct, getProducts, putProduct, deleteProduct} from '../controllers/products'
const router = Router()


// routes
router.post('/', postProduct);
router.get('/', getProducts);
router.put('/:id', putProduct)
router.delete('/:id', deleteProduct)

export default router 