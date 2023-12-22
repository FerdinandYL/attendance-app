import bcrypt from 'bcrypt';

import { getUserDataByEmail } from "../models/user.js";
import { failedResponse, successResponse } from '../util/response.js';
import { getJWTKey } from '../util/jwt.js';

export const userLogin = async (req, res) => {
    const userInput = req.body;
    const userData = await getUserDataByEmail(userInput.email);

    if (userData.result === null) {
        return failedResponse(res, userData.err);
    }

    try {
        const isPasswordMatch = await bcrypt.compare(userInput.password, userData.result.password);

        if (isPasswordMatch) {
            const token = await getJWTKey({ id: userData.result.id, name: userData.result.name, email: userData.result.email });
            return successResponse(res, token);
        } else {
            return failedResponse(res, "Password Wrong");
        }
    } catch (error) {
        return failedResponse(res, error);
    }
};