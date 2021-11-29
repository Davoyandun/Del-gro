import {Router} from 'express';
import { postPests } from '../controllers/pests';
const router = Router()


// Routes
router.post('/',postPests)
 



export default router