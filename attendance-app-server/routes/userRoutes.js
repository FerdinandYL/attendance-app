import express from 'express';
import { userLogin } from '../controllers/userController.js';

const userRouter = express();

userRouter.post('/login', userLogin);

export default userRouter;