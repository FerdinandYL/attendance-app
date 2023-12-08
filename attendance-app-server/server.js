// Server Utility
import express from 'express';
// import bodyParser from 'body-parser';
import morgan from 'morgan';
// import cors from 'cors';
import { getAllUsers, loginUser } from './models/users.js';

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
// app.use(cors);

// Users
app.get('/', async (req, res) => {
    const user = await loginUser({email:'yusakferdinand@gmail.com', password:'admin'});
    console.log(user);
    res.send('hello');
})

app.listen(PORT, () => {
    console.log(`App listen to Port : ${PORT}`)
})