import { execQuery } from "../../util/db.js";
import bcrypt from 'bcrypt';

export const getAllUsers = async () => {
    const textQuery = 'SELECT * FROM public.users';
    const result = await execQuery(textQuery);
    return result;
}

export const addUser = async (input) => {
    //Rapihin lagi sama handle error yg bener.
    try {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const textQuery = 'INSERT INTO public.users (name, email, password, photo, role) VALUES ($1, $2, $3, $4, $5)';
        const values = [input.name, input.email, hashedPassword, input.photo, input.role];
        await client.query(textQuery, values);
        console.log(`User added: ${input.name}`);
    } catch (error) {
        console.error('Error adding user:', error);
    }
}

export const loginUser = async (input) => {
    try{
        const textQuery = 'SELECT * FROM public.users WHERE email=$1';
        const values = [input.email];
        const result = await execQuery(textQuery, values);
        if(result.length > 0){
            const authenticate = await bcrypt.compare(input.password, result[0].password);
            if(authenticate) {
                return {result:result[0], error:null};
            } else {
                return {result:null, error:'password false'};
            }
        } else {
            return {result:null, error:'User not found'};
        }
        
    } catch(e) {
        return {result:null, error: e};
    }
}

export const deleteUser = async (input) => {
    try{
        const textQuery = 'DELETE FROM public.users WHERE id = $1 RETURNING *';
        const values = [input.id];
        const result = await execQuery(textQuery, values);
        if(result.length > 0) {
            return {result:`${result[0].name} is deleted`, error:null};
        } else {
            return {result:null, error:'User not found'};
        }
    } catch(e) {
        return {result:null, error: e};
    }
}

export const updateUser = async (input) => {
    // Solve problem cara super admin update id lain.
    try{
        const textQuery = 'UPDATE public.users SET name = $1, email = $2, photo = $3, role = $4 WHERE id = $5 RETURNING *';
        const values = [input.name, input.email, input.photo, input.role, input.id];
        const result = await execQuery(textQuery, values);
        if(result.length > 0) {
            return {result:`Updated to ${result[0].name}`, error:null};
        } else {
            return {result:null, error:'User not found'};
        }
    } catch(e) {
        return {result:null, error: e};
    }
}

export const registerUser = async (input) => {
    // used by non-user to register themself into a user.
    const hashedPassword = await bcrypt.hash(input.password, 10);
    console.log(hashedPassword);
    try{
        const textQuery = "INSERT INTO public.users (name, email, password, photo, role) VALUES ($1, $2, $3, $4, $5)";
        const values = [input.name, input.email, hashedPassword, input.photo, input.role];
        // await execQuery(textQuery, values);
        return {result:"success", error:null};
    } catch(e) {
        console.log(e);
        return {result:null, error: e};
    }
}