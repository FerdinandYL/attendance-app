import {jwtDecode} from 'jwt-decode';
import { Link, redirect } from 'react-router-dom';

export default function Dashboard(){
    const token = jwtDecode(sessionStorage.getItem('token'));
    const nama = token.name;
    console.log(token);

    return(
        <>
            <h1>Halo, {nama}!</h1><h3>Selamat datang di aplikasi CheckMate :D</h3>
            <div className="ui buttons">
                <Link to="/user/catat"><button className="ui fluid green button"><h4>Catat Kehadiran <i className="pencil alternate icon"></i></h4></button></Link>
                <Link to="/user/laporan"><button className="ui fluid teal button"><h4>Laporan <i className="clipboard list icon"></i></h4></button></Link>
            </div>
        </>   
    );
}