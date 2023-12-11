import {checkAttendances, timein, timeOut} from './repository.js';

export const checkAttendance = async (req, res) => {
    const status = await checkAttendances(req.body);
    console.log(status.result);
    console.log(status.error);
    if(status.result == 'timein'){
        const result = await timein(req.body);
        res.send(result);
    } else if(status.result == 'timeout'){
        const result = await timeOut(req.body);
        res.send(result);
    } else {
        res.send("Error occured");
    }
}