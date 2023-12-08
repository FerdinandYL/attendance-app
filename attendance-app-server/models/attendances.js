import { execQuery } from "../util/db.js";

export const getAllAttendances = async () => {
    const textQuery = 'SELECT * FROM public.attendances';
    const result = await execQuery(textQuery);
    return result;
}

/*
    Problems : show attendances report
    get attendances by date, then compare it with total users that have the same role.
*/