import { execQuery } from "../util/db.js";

export const getAllAttendances = async () => {
    const textQuery = 'SELECT * FROM public.attendances';
    const result = await execQuery(textQuery);
    return result;
}