import express from "express";
import {checkAttendance, writeAttendances} from './handler.js'

const attendancesRoutes = express.Router();

attendancesRoutes.post('/check', checkAttendance);
attendancesRoutes.post('/attend', writeAttendances);

export default attendancesRoutes;
//benerin lagi routing nya.