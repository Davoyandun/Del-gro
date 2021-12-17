import {Router} from 'express';
import { postPosts, getPosts } from '../controllers/posts';
const router = Router()


// Routes
router.post('/',postPosts)
router.get('/',getPosts)
 



export default router