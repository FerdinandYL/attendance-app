import bcrypt from 'bcrypt';
import { loginUser, registerUser } from './repository.js';

// const showLoginPage = (req, res) => {
//     res.send({page : 'Login Page'});
// }

// const showRegisterPage = (req, res) => {
//     res.send({page : 'Login Register'});
// }

export const processLogin = async (req, res) => {
    try{
        const result = await loginUser(req.body);
        res.send(result);
    } catch(e) {
        console.log(e);
    }
}

export const processRegister = async (req, res) => {
    try{
        const result = await registerUser(req.body);
        res.send(result);
    } catch(e) {
        console.log(e);
    }
}