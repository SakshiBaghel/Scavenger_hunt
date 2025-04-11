// // import mongoose from "mongoose";

// // const connectDB = async () => {
// //     mongoose.connection.on('connected',()=>console.log("database connected"));
// //     await mongoose.connect (`${process.env.MONGO_URI}/Scavenger-hunt`);


// // };

// // export default connectDB;


// // // import express from 'express';
// // // import 'dotenv/config';
// // // import cors from 'cors';
// // // import cookieParser from 'cookie-parser';
// // // import mongoose from 'mongoose';

// // // import connectDB from './config/mongodb.js';
// // // import authRouter from './routes/authRoutes.js';
// // // import userRouter from './routes/userRoutes.js';
// // // import huntRoutes from './routes/huntRoute.js';
// // // import playerRoutes from './routes/playerRoute.js';

// // // const app = express();
// // // const port = process.env.PORT || 4000;

// // // // Connect to MongoDB
// // // connectDB();

// // // app.use(cors({
// // //     origin: ['http://localhost:3000', 'http://localhost:3001'],
// // //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
// // //     credentials: true,
// // // }));

// // // app.use(express.json());
// // // app.use(cookieParser());

// // // app.use((req, res, next) => {
// // //     console.log(req.method, req.path);
// // //     next();
// // // });

// // // // Routes
// // // app.get('/', (req, res) => res.send('API is running fine'));
// // // app.use('/api/auth', authRouter);
// // // app.use('/api/user', userRouter);
// // // app.use('/api/hunt', huntRoutes);
// // // app.use('/api/player', playerRoutes);

// // // // MongoDB Connection and Server Start
// // // mongoose
// // //     .connect(process.env.MONGO_URI)
// // //     .then(() => {
// // //         app.listen(port, () => {
// // //             console.log(`Connected to DB & listening on port ${port}`);
// // //         });
// // //     })
// // //     .catch((error) => {
// // //         console.error('Database Connection Error:', error);
// // //     });


// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         mongoose.connection.on('connected', () => console.log("✅ Database connected"));

//         const fullUri = `${process.env.MONGO_URI_BASE}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

//         await mongoose.connect(fullUri);
//     } catch (error) {
//         console.error("❌ MongoDB connection error:", error);
//         process.exit(1);
//     }
// };

// export default connectDB;


import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
