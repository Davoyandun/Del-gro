import express,{json} from 'express'
import morgan from 'morgan'



app.use(morgan('dev'));
app.use(json())

const app = express(),
