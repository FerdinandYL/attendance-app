import express from 'express'
import {processLogin, processRegister} from './handler.js'

const userRoutes = express.Router();

// route.get('/login', showLoginPage);
// route.get('/register', showRegisterPage);
userRoutes.post('/login', processLogin);
userRoutes.post('/register', processRegister);

export default userRoutes;

// please add error handling.
// please add middleware validation.
// References : https://chat.openai.com/share/c5d48a0c-85e1-45f4-9639-fe6d422c49c0