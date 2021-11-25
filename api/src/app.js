import express,{json} from 'express';
import morgan from 'morgan';




// Import routes 

import productRoutes from './routes/products';
import brandRoutes from './routes/brands'

// inicializacion 
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json())


//routes
app.use('/products',productRoutes);
app.use('/brands',brandRoutes)



export default app

