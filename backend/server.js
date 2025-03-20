import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
//import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port= process.env.PORT || 4000;
connectDB();

const allowedOrigins = ['http://localhost:3000'];
 
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins, credentials:true}));

//api endpoints
app.get('/',(req,res)=>res.send('Api is running fineeeee'));
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);



app.listen(port,()=>console.log(`Server is running on port ${port}`));

