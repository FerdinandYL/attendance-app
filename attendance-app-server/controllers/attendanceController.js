import { checkAttendanceStatus, timeIn } from "../models/attendances.js";
import { successResponse } from "../util/response.js";
import { getToken } from "../util/jwt.js";

import dotenv from 'dotenv';
dotenv.config();

export const getAttendanceInfo = async(req, res) => {
    // Buat dapetin jam terakhir absen
    const user = await getToken(req);
    const attendanceData = await checkAttendanceStatus(user.id);
    return successResponse(res, attendanceData.result);
}

export const writeUserAttendance = async(req, res) => {

    // Buat catat kehadiran
    const user = await getToken(req);
    const result = await checkAttendanceStatus(user.id);

    //berati belum absen, jadi timeIn.
    if(result.result == null && result.err == null){ 
        const writeResult = await timeIn(user.id);
        return successResponse(res, writeResult.result);
    } 

    //berati udah absen, jadi timeOut.
    else if(result.result != null && result.err == null){ 
        const writeResult = await timeOut(user.id);
        return successResponse(res, writeResult.result);
    }
}