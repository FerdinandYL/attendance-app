import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { getUserDataByEmail } from "../models/user.js";
import { failedResponse, successResponse } from '../util/response.js';

export const userLogin = async (req, res) => {
    const userInput = {email:req.body.email, password:req.body.password};
    const userData = await getUserDataByEmail(userInput.email);

    // isDataFound ?
    if(userData.result === null) return failedResponse(res, userData.err);

    // isPasswordMatch ?
    const isPasswordMatch = bcrypt.compare(userInput.password, userData.result.password);
    if(!isPasswordMatch) return failedResponse(res, "Password Wrong");

    // tokenify
    const jwtToken = jwt.sign({id:userData.result.id, name:userData.result.name, email:userData.result.email}, '69');

    return successResponse(res, jwtToken);
}