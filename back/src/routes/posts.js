import {Router} from 'express';
import { postPosts } from '../controllers/posts';
const router = Router()


// Routes
router.post('/',postPosts)
 



export default router