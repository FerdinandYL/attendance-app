import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export const getJWTKey = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
    return token;
}

export async function getToken(req){
    const token = req.headers.authorization;
    const user = await jwt.verify(token, process.env.JWT_SECRET_KEY, function(err,decode){
        if(err){
            console.log(err);
        } else {
            return decode;
        }
    });
    if(typeof user != "undefined"){
        return user;
    } //nanti buat err nya buat logging.
}