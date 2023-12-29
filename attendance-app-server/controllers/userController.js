import bcrypt from 'bcrypt';

import { deleteUser, getUserDataByEmail, getUsersByRole, insertUser } from "../models/user.js";
import { failedResponse, successResponse } from '../util/response.js';
import { getJWTKey } from '../util/jwt.js';

export const userLogin = async (req, res) => {

    // Untuk user Login :D
    const userInput = req.body;
    const userData = await getUserDataByEmail(userInput.email);

    if (userData.result === null) {
        return failedResponse(res, userData.err);
    }

    try {
        const isPasswordMatch = await bcrypt.compare(userInput.password, userData.result.password);

        if (isPasswordMatch) {
            const token = await getJWTKey({ id: userData.result.id, name: userData.result.name, email: userData.result.email, role:userData.result.role });
            return successResponse(res, token);
        } else {
            return failedResponse(res, "Password Wrong");
        }
    } catch (error) {
        return failedResponse(res, error);
    }

};

export const userInsert = async (req, res) => {

    //Untuk masukin data user. Dipake Super Admin atau Admin
    const userData = req.body;

    try {
        const queryResult = await insertUser(userData);
        if(queryResult.err == null){
            return successResponse(res, queryResult.result);
        } else {
            return failedResponse(res, queryResult.err);
        }
    } catch (error) {
        return failedResponse(res, error);
    }
}

export const userGetEmployees = async (req, res) => {

    // Untuk mengambil data semua user dengan role tertentu. (misal admin atau employee)
    try {
        const queryResult = await getUsersByRole('employee');
        if (queryResult.err == null) {
            return successResponse(res, queryResult.result);
        } else {
            return failedResponse(res, queryResult.err);
        }
    } catch (error) {
        return failedResponse(res, error);
    }
}

export const userGetAdmins = async (req, res) => {

    // Untuk mengambil data semua user dengan role tertentu. (misal admin atau employee)
    try {
        const queryResult = await getUsersByRole('admin');
        if (queryResult.err == null) {
            return successResponse(res, queryResult.result);
        } else {
            return failedResponse(res, queryResult.err);
        }
    } catch (error) {
        return failedResponse(res, error);
    }
}

export const userDelete = async (req, res) => {
    
    // Untuk hapus user dengan id tertentu
    const id = req.body.id;
    try {
        const queryResult = await deleteUser(id);
        return successResponse(res, queryResult);
    } catch (error) {
        return failedResponse(res, error);
    }
}