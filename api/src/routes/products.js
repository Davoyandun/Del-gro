import {Router} from 'express';
import {postProduct} from '../controllers/products'
const router = Router()

// routes
router.post('/', postProduct)


export default router