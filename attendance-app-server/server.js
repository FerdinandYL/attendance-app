// Server Utility
import express from 'express';
import morgan from 'morgan';
// import cors from 'cors';

import userRoutes from './models/users/routes.js';
import attendancesRoutes from './models/attendances/routes.js';

const PORT = 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
// app.use(cors);

// Users
app.use('', userRoutes);
app.use('', attendancesRoutes);

app.listen(PORT, () => {
    console.log(`App listen to Port : ${PORT}`)
})

// Benerin lagi struktur data nya.
// References : https://chat.openai.com/share/bb6f9a8e-d16f-48c8-92d6-833142bd125f

// Bikin middleware buat validasi auth JWT