import {jwtDecode} from 'jwt-decode';
import { redirect } from 'react-router-dom';

export default function Dashboard(){
    const token = jwtDecode(sessionStorage.getItem('token'));
    const nama = token.name;
    console.log(token);

    return(
        <div style={{ marginLeft:'250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div className="ui middle aligned center aligned grid" style={{width: '60vw'}}>
                <div className="column">
                    <h1>Halo, {nama}!</h1><h3>Selamat datang di aplikasi CheckMate :D</h3>
                    <div className="three ui buttons">
                        <button className="ui green button" style={{margin:'2px'}}><h4>Catat Kehadiran <i className="pencil alternate icon"></i></h4></button>
                        <button className="ui teal button" style={{margin:'2px'}}><h4>Laporan <i className="clipboard list icon"></i></h4></button>
                        <button className="ui blue button" style={{margin:'2px'}}><h4>Status <i className="address card icon"></i></h4></button>
                    </div>
                </div>
            </div>
        </div>
    );
}