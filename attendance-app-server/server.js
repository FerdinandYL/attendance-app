// Server Utility
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRouter from './routes/userRoutes.js';
import attendanceRouter from './routes/attendanceRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('', userRouter);
app.use('', attendanceRouter);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App listen to Port : ${PORT}`)
})

// Benerin lagi struktur data nya.
// References : https://chat.openai.com/share/bb6f9a8e-d16f-48c8-92d6-833142bd125f

// Bikin middleware buat validasi auth JWT