import express from "express";

const adminRouter = express();

superAdminRouter.get('/dashboard', showAdminDashboard);

adminRouter.get('/report', showReportPage);
adminRouter.get('/report/:id', showReportDetailsPage);
adminRouter.get('/report/edit/:id', showReportEditPage);
adminRouter.post('/report/edit/:id', processReportEdit);

adminRouter.get('/users', showUsersPage);
adminRouter.get('/users/:id', showUsersDetailsPage);
adminRouter.get('/users/edit/:id', showUsersEditPage);
adminRouter.post('/users/edit/:id', processUsersEdit);

export default adminRouter;