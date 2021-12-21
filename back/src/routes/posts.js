import {Router} from 'express';
import { postPosts, getPosts, putPosts } from '../controllers/posts';
const router = Router()


// Routes
router.post('/',postPosts)
router.get('/',getPosts);
router.put('/:id',putPosts)


export default router