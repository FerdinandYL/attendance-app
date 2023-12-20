import { execQuery } from "../util/db.js";

export const getUserDataByEmail = async (email) => {
    try{
        const queryText = 'SELECT * FROM public.users WHERE email=$1';
        const queryResult = await execQuery(queryText, [email]);
        return {result:queryResult[0], err:null};
    } catch(e){
        return {result:null, err:e};
    }
}