import { Outlet, Link, redirect, useLoaderData } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Root(){

    return (
        <>
            <div className="ui visible sidebar large vertical menu">
                <div className="header item"><h2>Dashboard</h2></div>
                <Link className="item" to={``}>Main Menu</Link>
                <div className="item">
                    <h3 className="header">Attendances</h3>
                    <div className="menu">
                        <Link className="item" to={`kehadiran`}>Catat Kehadiran</Link>
                        <Link className="item" to={`laporan`}>Laporan Kehadiran</Link>
                    </div>
                </div>
                <Link className="teal item" to={``}>Account</Link>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
        </>
    );
}