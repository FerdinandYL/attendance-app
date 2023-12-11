import express from "express";
import {checkAttendance} from './handler.js'

const attendancesRoutes = express.Router();

attendancesRoutes.post('/attend', checkAttendance);

export default attendancesRoutes;
//benerin lagi routing nya.