import express from "express";
import { attendanceDelete, getAttendanceInfo, writeUserAttendance } from "../controllers/attendanceController.js";
import { getAttendanceById } from "../models/attendances.js";

const attendanceRouter = express();

attendanceRouter.get('/attendance', getAttendanceInfo);
attendanceRouter.post('/attendance', writeUserAttendance);
attendanceRouter.post('/attendance/detail', getAttendanceById);
attendanceRouter.post('/attendance/delete', attendanceDelete);


export default attendanceRouter;