import { execQuery } from "../../util/db.js";

export const checkAttendances = async (user) => {
    try{
        const queryText = "SELECT * FROM public.attendances WHERE date = CURRENT_DATE AND usersid = $1";
        const values = [user.id];
        const result = await execQuery(queryText, values);
        if(result.length > 0 && result[0].time_out == null){
            return {result:'timeout', error:null};
        } else if(result.length > 0 && result[0].time_out != null){
            return {result:null, error:'already fill today attendances form.'};
        } else {
            return {result:'timein', error:null};
        }
    } catch(e){
        console.log(e);
        return {result:null, error: e};
    }
}

export const timein = async (user) => {
    try{
        const queryText = "INSERT INTO public.attendances (usersid, time_in, date, longitude_in, latitude_in, status, _edited_by) VALUES ($1, CURRENT_TIMESTAMP, CURRENT_DATE, -6.935742996001737, 107.57823369229901, 'hadir', $1) RETURNING *";
        const values = [user.id];
        const result = await execQuery(queryText, values);
        if(result.length > 0){
            return {result:'timein recorded', error:null};
        }
    } catch(e){
        console.log(e);
        return {result:null, error: e};
    }
}

export const timeOut = async (user) => {
    try{
        const queryText = "UPDATE public.attendances SET time_out = CURRENT_TIMESTAMP, longitude_out = -6.935742996001737, latitude_out = 107.57823369229901, status = 'hadir' WHERE usersid = $1 AND date = CURRENT_DATE AND time_out IS NULL RETURNING *";
        const values = [user.id];
        const result = await execQuery(queryText, values);
        if(result.length > 0){
            return {result:'timeout recorded', error:null};
        }
    } catch(e){
        console.log(e);
        return {result:null, error: e};
    }
}