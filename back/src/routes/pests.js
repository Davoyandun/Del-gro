import {Router} from 'express';
import { postPest, getPests, putPests } from '../controllers/pests';
const router = Router()


// Routes
router.post('/',postPest)
router.get('/',getPests)
router.put('/:id',putPests)

 



export default router