import { jwtDecode } from "jwt-decode";
import { Outlet, Link, redirect, Navigate } from "react-router-dom";

export const loader = async () => {
    const token = sessionStorage.getItem('token');
    const user = await jwtDecode(token);
    const role = user.role;
    if(role != 'employee'){
        sessionStorage.clear();
        return redirect('/login');
    } else {
        return null;
    }
}

export default function UserRoot(){
    return (
        <>
            <div className="ui visible sidebar large vertical menu">
                <div className="header item"><Link className="item" to={``}><h2>Dashboard</h2></Link></div>
                <div className="item">
                    <Link to={`kehadiran`}><h3>Attendances</h3></Link>
                    <div className="menu">
                        <Link className="item" to={`catat`}>Catat Kehadiran</Link>
                        {/* <Link className="item" to={`cuti`}>Izin cuti</Link>
                        <Link className="item" to={`sakit`}>Izin sakit</Link> */}
                        <Link className="item" to={`laporan`}>Laporan Kehadiran</Link>
                    </div>
                </div>
                <Link className="teal item" to={``}>Account</Link>
            </div>
            <div className="outlet">
                <div style={{ marginLeft: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <div className="ui middle aligned center aligned grid" style={{ width: '60vw' }}>
                        <div className="column"><Outlet /></div>
                    </div>
                </div>
            </div>
        </>
    );

}