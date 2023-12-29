import bcrypt from 'bcrypt';
import { execQuery } from "../util/db.js";

export const getUserDataByEmail = async (email) => {
    // Dapetin user pake email. buat login.
    try{
        const queryText = "SELECT * FROM public.users WHERE email=$1";
        const queryResult = await execQuery(queryText, [email]);
        return {result:queryResult[0], err:null};
    } catch(error){
        return {result:null, err:error};
    }
}

export const insertUser = async (userData) => {
    // Masukin data user baru.
    try {
        const queryText = "INSERT INTO public.users (name, email, password, photo, role) VALUES ($1, $2, $3, null, $4)";
        const hashedPassword = await bcrypt.hash(userData.password);
        const queryResult = await execQuery(queryText, [userData.name, userData.email, hashedPassword, userData.role]);
        return {result:'insert user success', err:null};
    } catch (error) {
        return {result:null, err:error};
    }
}

export const deleteUser = async (id) => {
    // Hapus data user berdasarkan id.
    try {
        const queryText = "DELETE FROM public.users WHERE id = $1;";
        const queryResult = await execQuery(queryText, [id]);
        return {result:'delete user success', err:null};
    } catch (error) {
        return {result:null, err:error};
    }
}

export const getUsersByRole = async (role) => {
    try {
        const queryText = 'SELECT * FROM public.users WHERE role = $1;';
        const queryResult = execQuery(queryText, [role]);
        return {result:queryResult, err:null};
    } catch (error) {
        return {result:null, err:error};
    }
}