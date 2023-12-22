import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet, redirect, useLoaderData } from "react-router-dom";

export const loader = async() => {
    const sessionToken = sessionStorage.getItem('token');
    if (sessionToken == null){
        console.log('redirect ke /login');
        return redirect('/login')
    }  
    else {
        // tinggal buat silent refresh nya guys... 🤫
        try {
            const decodedToken = await jwtDecode(sessionToken);
            const currentTimestamp = Math.floor(Date.now() / 1000);
            if(decodedToken.exp && decodedToken.exp < currentTimestamp){
                sessionStorage.removeItem('token');
                return redirect('/login');
            } else {
                console.log('token aman')
                return sessionToken;
            }
        } catch (error) {
            console.log(error.message);
            console.log(sessionToken);
            sessionStorage.removeItem('token');
            return redirect('/login');
        }
        
    }
}

const ProtectedRoutes = () => {
    const sessionToken = useLoaderData();
    if (sessionToken==null) {
        return <Navigate to="/login" replace />
    } else {
        return <Outlet />
    }
}

export default ProtectedRoutes;