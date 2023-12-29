import { Outlet, Link, redirect, useLoaderData } from "react-router-dom";

export default function AdminRoot(){
     return(
        <>
        <div className="ui top attached menu">
            <a className="item">Manage Employee</a>
            <div className="right menu">
                <a className="item">Logout</a>
            </div>
        </div>
        <div className="outlet">
            <Outlet/>
        </div>
        </>
     );
}