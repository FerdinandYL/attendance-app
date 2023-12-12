import express from 'express';

const userRouter = express();

userRouter.get('/dashboard', showUserDashboard);
userRouter.get('/attendance', showUserAttendance);
userRouter.post('/attendance', processUserAttendance);

export default userRouter;