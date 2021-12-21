import {Router} from 'express';
import { postPest, getPests, putPest, deletePest } from '../controllers/pests';
const router = Router()


// Routes
router.post('/',postPest)
router.get('/',getPests)
router.put('/:id',putPest)
router.delete('/:id',deletePest)
export default router