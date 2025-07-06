import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import huntRoutes from './routes/huntRoute.js';
import playerRoutes from './routes/playerRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
}));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => res.send('API is running fineeeee'));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/hunt', huntRoutes);
app.use('/api/player', playerRoutes);

// Database + Server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Connected to DB & listening on port ${port}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB:", err);
});
