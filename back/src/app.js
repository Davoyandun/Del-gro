import express,{json} from 'express';
import morgan from 'morgan';
const cors = require('cors');




// Import routes 

import carruselRoutes from './routes/carrusels'
import productRoutes from './routes/products';
import brandRoutes from './routes/brands'
import pestRoutes from './routes/pests'
import cropRoutes from './routes/crops'
import postRoutes from './routes/posts'
import loginRoutes from './routes/login'




// inicializacion 
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json())
app.use(cors())

//routes
app.use('/brands',brandRoutes);
app.use('/pests',pestRoutes);
app.use('/crops',cropRoutes);
app.use('/posts',postRoutes);
app.use('/carrusel',carruselRoutes);
app.use('/products',productRoutes);
app.use('/login',loginRoutes);




export default app

