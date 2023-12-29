import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet, redirect, useLoaderData } from "react-router-dom";

export const loader = async() => {
    const sessionToken = sessionStorage.getItem('token');
    if (sessionToken == null){
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
                sessionStorage.setItem('user', decodedToken);
                return decodedToken;
            }
        } catch (error) {
            console.error(error);
            sessionStorage.removeItem('token');
            return redirect('/login');
        }
    }
}

const TokenProtector = () => {
    
    const decodedToken = useLoaderData();

    if (decodedToken==null) {
        return <Navigate to="/login" replace />
    } else {
        return <Outlet />;
    }
}

export default TokenProtector;