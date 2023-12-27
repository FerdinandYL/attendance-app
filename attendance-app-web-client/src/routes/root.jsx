import { Outlet, Link, redirect, useLoaderData } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Root(){

    return (
        <>
            <div className="ui visible sidebar large vertical menu">
                <div className="header item"><Link className="item" to={``}><h2>Dashboard</h2></Link></div>
                <div className="item">
                    <Link to={`kehadiran`}><h3 className="item">Attendances</h3></Link>
                    <div className="menu">
                        <Link className="item" to={`catat`}>Catat Kehadiran</Link>
                        <Link className="item" to={`cuti`}>Izin cuti</Link>
                        <Link className="item" to={`sakit`}>Izin sakit</Link>
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