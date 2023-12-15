export default function CatatKehadiran(){

    const isPresence = false;
    let element;

    if (!isPresence){
        element = (
            <div>
                <h1>Kamu belum mengisi presensi kehadiran hari ini.</h1>
                <button className="ui green button" style={{marginRight: '15px'}}>Mulai</button>
                <button className="ui disabled button" type="disabled">Berhenti</button>
            </div>
        );
    } else {
        
        element = (
            <div>
                <h1>Kamu mencatat mulai bekerja pukul : waktu</h1>
                <button className="ui disabled button" type="disabled" style={{marginRight: '15px'}}>Mulai</button>
                <button className="ui green button">Berhenti</button>
            </div>
        );
    }
    return(
        <div style={{ marginLeft:'250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div className="ui middle aligned center aligned grid" style={{width: '60vw'}}>
                <div className="column">
                    {element}
                </div>
            </div>
        </div>
    );
}