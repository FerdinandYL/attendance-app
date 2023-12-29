import { execQuery } from "../util/db.js";

export const checkAttendanceStatus = async (id) => {
    try{
        const queryText = "SELECT * FROM public.attendances WHERE date = CURRENT_DATE AND usersid = $1";
        const queryResult = await execQuery(queryText, [id]);

        // isFound ? timeOut : timeIn
        if(queryResult.length > 0) return {result:queryResult[0], err:null}; // isFound == true; return result
        else return {result:null, err:null}; // isFound == false; return empty object (mean no result found == timeIn);
        
    } catch(e) {
        return {result:null, err:e};
    }
}

export const timeIn = async (id) => {
    try{
        const queryText = "INSERT INTO public.attendances (usersid, time_in, date, longitude_in, latitude_in, status, _edited_by) VALUES ($1, CURRENT_TIMESTAMP, CURRENT_DATE, -6.935742996001737, 107.57823369229901, 'hadir', $1) RETURNING *";
        const result = await execQuery(queryText, [id]);

        if(result.length > 0){
            console.log('success');
            return {result:'Time in recorded', error:null};
        }
    } catch(e){
        console.log(e);
        return {result:null, error: e};
    }
}

export const timeOut = async (id) => {
    try{
        const queryText = "UPDATE public.attendances SET time_out = CURRENT_TIMESTAMP, longitude_out = -6.935742996001737, latitude_out = 107.57823369229901, status = 'hadir' WHERE usersid = $1 AND date = CURRENT_DATE AND time_out IS NULL RETURNING *";
        const result = await execQuery(queryText, [id]);
        
        if(result.length > 0){
            return {result:'Time out recorded', error:null};
        }
    } catch(e){
        console.log(e);
        return {result:null, error: e};
    }
}

export const getAttendanceById = async (id) => {
    try{
        const queryText = "SELECT * FROM public.attendances WHERE id = $1";
        const queryResult = await execQuery(queryText, [id]);
        
        return {result:queryResult, err:e}
        
    } catch(e) {
        return {result:null, err:e};
    }
}

export const getAttendanceByUserId = async (id) => {
    try{
        const queryText = "SELECT * FROM public.attendances WHERE users_id = $1";
        const queryResult = await execQuery(queryText, [id]);
        
        return {result:queryResult, err:e}
        
    } catch(e) {
        return {result:null, err:e};
    }
}

export const deleteAttendance = async (id) => {
    try{
        const queryText = "DELETE FROM public.attendances WHERE id = $1";
        const queryResult = await execQuery(queryText, [id]);
        
        return {result:'success deleting attendance', err:e}
        
    } catch(e) {
        return {result:null, err:e};
    }
}