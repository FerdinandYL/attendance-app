export default function AttendanceMenuPage(){

    const date = new Date(Date.now());
    const arrayHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const hari = date.getDate();
    const bulan = date.getMonth() + 1;
    const tahun = date.getFullYear();
    const tanggal = `${arrayHari[date.getDay()]}, ${hari}/${bulan}/${tahun}`;

    return(
        <>
            <h1 className="ui fluid blue header">{tanggal}</h1>
            <div className="ui stackable three cards">
                <div className="ui green card">
                    <div className="content">
                        <h3 className="ui green header">
                            <i className="pencil alternate icon"></i>
                            <div className="content">
                            Catat Kehadiran
                            <div className="left aligned sub header">belum</div>
                            </div>
                        </h3>
                    </div>
                    <div className="content">
                        <button className="ui fluid green button">Catat Kehadiran</button>
                    </div>
                </div>
                <div className="ui yellow card">
                    <div className="content">
                        <h3 className="ui yellow header">
                            <i className="sticky note icon"></i>
                            <div className="content">
                                Mengajukan Izin Cuti
                                <div className="left aligned sub header">&nbsp;</div>
                            </div>
                        </h3>
                    </div>
                    <div className="content">
                        <button className="ui fluid yellow button">Izin Cuti</button>
                    </div>
                </div>
                <div className="ui orange card">
                    <div className="content">
                        <h3 className="ui orange header">
                            <i className="calendar plus outline icon"></i>
                            <div className="content">
                                Mengajukan Izin Sakit
                                <div className="left aligned sub header">&nbsp;</div>
                            </div>
                        </h3>
                    </div>
                    <div className="content">
                        <button className="ui fluid orange button">Izin Sakit</button>
                    </div>
                </div>
            </div>
        </>
    );
}