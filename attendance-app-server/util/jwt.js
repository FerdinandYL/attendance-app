import jwt from 'jsonwebtoken';
import util from 'util';
const jwtVerifyAsync = util.promisify(jwt.verify);

import dotenv from 'dotenv';
dotenv.config();

export const getJWTKey = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {expiresIn:'1m'}); //ganti expirationToken.
    return token;
}

export async function getDecodedToken(req) {

    // jangan lupa handle token timeout biar ga error dan berenti server nya.
    try {

        // Extract authorization header from request
        const authorizationHeader = req.headers.authorization;

        // Extract token from authorization header
        const authtoken = authorizationHeader ? authorizationHeader.split(' ')[1] : null;

        if (!authtoken) {console.error(Error('No token provided'))}
        const decodedToken = await jwtVerifyAsync(authtoken, process.env.JWT_SECRET_KEY);

        // Log decoded token for debugging (remove in production)
        return decodedToken;

    } catch (error) {
        // Handle errors
        console.error("Error in getDecodedToken:", error.message);

        // You can customize the error handling based on your needs
        console.error(Error('Invalid token'));
    }
}