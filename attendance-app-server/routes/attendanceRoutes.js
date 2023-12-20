import express from "express";
import { getAttendanceInfo, writeUserAttendance } from "../controllers/attendanceController.js";

const attendanceRouter = express();

// Mendapatkan info attendance terakhir.
attendanceRouter.get('/attendance', getAttendanceInfo);
// Mencatat info attendance.
attendanceRouter.post('/attendance', writeUserAttendance);

export default attendanceRouter;