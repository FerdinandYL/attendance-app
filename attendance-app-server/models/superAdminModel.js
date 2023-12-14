import execQuery from '../util/db'

export const getAllAdmin = async() => {
    const queryText = "SELECT * FROM public.users WHERE role='admin'";
    const result = await execQuery(queryText);
    return result;
}

export const insertNewAdmin = async(user) => {
    // Insert new user as admin.
}

export const deleteAdmin = async(id) => {
    // Delete admin according to id.
}

export const updateAdmin = async(user) => {
    // Update admin info.
}