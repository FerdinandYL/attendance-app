export default function LaporanPage(){

    const arrayHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const arrayBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

    let currentDate = new Date();
    
    const yearNow = currentDate.getFullYear();
    const monthNow = currentDate.getMonth();
    const dayNow = currentDate.getDay();
    const dateNow = currentDate.getDate();
    const tanggal = `${arrayHari[dayNow]}, ${dateNow}/${monthNow+1}/${yearNow}`;

    currentDate.setDate(1);
    const firstDay = currentDate.getDay();

    // let calendar;
    
    // for (let week=1; week<5; week++){
    //     for (let day=1; day<8; day++){
    //         if(day<=firstDay+1 && (week==1 || week==5)){
    //             calendar.push(<td></td>);
    //         } else {
    //             calendar.push(<td>{day*week}</td>);
    //         }
    //     }
        
    // }

    return(
        <div>
            <h3 className="header">{tanggal}</h3>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Mg</th>
                        <th>Sn</th>
                        <th>Sl</th>
                        <th>Rb</th>
                        <th>Km</th>
                        <th>Jm</th>
                        <th>Sb</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="positive">✔️</td>
                        <td className="negative">2</td>
                    </tr>
                    <tr>
                        <td className="negative">3</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="negative">9</td>
                    </tr>
                    <tr>
                        <td className="negative">10</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="negative">16</td>
                    </tr>
                    <tr>
                        <td className="negative">17</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="negative">23</td>
                    </tr>
                    <tr>
                        <td className="negative">24</td>
                        <td className="negative">25</td>
                        <td className="negative">26</td>
                        <td className="positive">✔️</td>
                        <td className="positive">✔️</td>
                        <td className="warning">...</td>
                        <td className="negative">30</td>
                    </tr>
                    <tr>
                        <td className="negative">31</td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                        <td className="disabled"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}