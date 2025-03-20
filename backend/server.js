require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const huntRoutes = require('./routes/huntRoute');
const playerRoutes = require('./routes/playerRoute');
const authRoutes = require("./routes/Authroute");
// app.use("/hunt", require("./components/PrivateRoute"));  // Protected Hunt Pages



//  Middleware (Fixed: Added CORS)
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));
// app.use(cors({
//     origin: ['http://localhost:3001', 'http://localhost:3000'], 
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//     credentials: true,
// }));


app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// Routes
app.use('/api/hunt', huntRoutes);
app.use('/api/player', playerRoutes);
app.use("/api/auth", authRoutes);

// Connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => console.error('Database Connection Error:', error));
