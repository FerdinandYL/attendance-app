import { checkAttendanceStatus, deleteAttendance, getAttendanceById, getAttendanceByUserId, timeIn, timeOut } from "../models/attendances.js";
import { failedResponse, successResponse } from "../util/response.js";
import { getDecodedToken } from "../util/jwt.js";

import dotenv from 'dotenv';
dotenv.config();

export const getAttendanceInfo = async(req, res) => {
    // Buat dapetin jam terakhir absen
    const user = await getDecodedToken(req);
    console.log(user);
    const attendanceData = await checkAttendanceStatus(user.id);
    return successResponse(res, attendanceData.result);
}

export const writeUserAttendance = async(req, res) => {

    // Buat catat kehadiran
    const user = await getDecodedToken(req);
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

export const attendanceGetById = async (req, res) => {
    
    const id = req.body.id;
    try {
        const queryResult = await getAttendanceById(id);
        if (queryResult.err == null){
            return successResponse(res, queryResult.result);
        } else {
            failedResponse(res, queryResult.err);
        }
    } catch (error) {
        failedResponse(res, error);
    }
}

export const attendanceGetByUserId = async (req, res) => {
    
    const id = req.body.id;
    try {
        const queryResult = await getAttendanceByUserId(id);
        if (queryResult.err == null){
            return successResponse(res, queryResult.result);
        } else {
            failedResponse(res, queryResult.err);
        }
    } catch (error) {
        failedResponse(res, error);
    }
}

export const attendanceDelete = async (req, res) => {
    
    const id = req.body.id;
    try {
        const queryResult = await deleteAttendance(id);
        if (queryResult.err == null){
            return successResponse(res, queryResult.result);
        } else {
            failedResponse(res, queryResult.err);
        }
    } catch (error) {
        failedResponse(res, error);
    }
}