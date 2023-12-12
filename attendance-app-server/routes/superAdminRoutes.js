import express from 'express';

const superAdminRouter = express();

superAdminRouter.get('/dashboard', showSuperAdminDashboard);
superAdminRouter.get('/admins', showAdminsPage);
superAdminRouter.get('/admins/:id', showAdminsDetailPage);
superAdminRouter.get('/admins/edit/:id', showAdminsEditPage);
superAdminRouter.post('/admins/edit/:id', processAdminsEdit);

export default userRouter;