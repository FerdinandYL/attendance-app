import express from 'express';
import { getUserDataByEmail } from '../models/user.js';

const userRouter = express();

userRouter.post('/login', getUserDataByEmail);

export default userRouter;