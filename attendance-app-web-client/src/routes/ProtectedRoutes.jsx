import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const localStorageToken = localStorage.getItem('token');
    console.log(localStorageToken);
    return localStorageToken!==null ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;