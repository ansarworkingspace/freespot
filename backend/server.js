import express from 'express';
import dotenv from 'dotenv';
import userRouters from './routers/userRouter.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config();
const port = process.env.PORT || 5000; 
connectDB();
const app = express()

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users',userRouters)


app.get('/',(req,res)=>{
    res.send('API is running')
})


app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})