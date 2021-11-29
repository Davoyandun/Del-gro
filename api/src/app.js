import express,{json} from 'express';
import morgan from 'morgan';




// Import routes 

import productRoutes from './routes/products';
import brandRoutes from './routes/brands'
import pestRoutes from './routes/pests'
import cropRoutes from './routes/crops'
import postRoutes from './routes/posts'


// inicializacion 
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json())


//routes
app.use('/products',productRoutes);
app.use('/brands',brandRoutes);
app.use('/pests',pestRoutes);
app.use('/crops',cropRoutes);
app.use('/posts',postRoutes);



export default app

