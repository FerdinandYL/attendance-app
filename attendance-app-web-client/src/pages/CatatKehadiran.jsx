import { Form, redirect, useLoaderData } from "react-router-dom";

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001';

axios.interceptors.request.use(config => {
  const authToken = sessionStorage.getItem('token');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export async function action() {
  try {
    const token = sessionStorage.getItem('token');
    await axios.post('http://localhost:3001/attendance', token);
    return redirect('/user/catat');
  } catch (error) {
    console.error('Error during timeIn:', error);
    return redirect('/user/catat');
  }
}

export async function loader() {
  try {
    // Use a config object to pass headers and other options to Axios
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Use the configured Axios instance to make the request
    const response = await axios.get('/attendance', config);
    return response.data;
  } 
  
  catch (error) {
    // Handle the error or rethrow it based on your requirements
    console.error('Error during HTTP request:', error);
    return null;
  }
}

export default function CatatKehadiran() {

    const response = useLoaderData();
    const attendanceData = response.Data;

    let status;
    let showTime;

    if(attendanceData==null){
      status = 'timein';
    } else {
      if(attendanceData.time_in!=null && attendanceData.time_out!=null){
        status = null;
      }else if(attendanceData.time_in!=null && attendanceData.time_out==null){
        status = 'timeout';
        const time = new Date(attendanceData.time_in);
        showTime = `${time.getHours()}:${time.getMinutes()}`;
      }
    }
  
    let element;
    if (status == null) {
      element = (
        <Form method="post" action="/user/catat">
          <h1>Kamu sudah presensi hari ini!</h1>
          <button className="ui disabled button" style={{ marginRight: '15px' }}>
            Mulai
          </button>
          <button className="ui disabled button" type="disabled">
            Berhenti
          </button>
        </Form>
      );
    }
    else if (status == 'timeout'){
      element = (
        <Form method="post" action="/user/catat">
          <h1>Kamu mencatat mulai bekerja hari ini pukul : {showTime}</h1>
          <button className="ui disabled button" type="disabled" style={{ marginRight: '15px' }}>
            Mulai
          </button>
          <button className="ui green button" type="submit">
            Berhenti
          </button>
        </Form>
      );
    } else if (status == 'timein') {
      element = (
        <Form method="post" action="/user/catat">
          <h1>Kamu belum mengisi presensi kehadiran hari ini.</h1>
          <button className="ui green button" style={{ marginRight: '15px' }} type="submit">
            Mulai
          </button>
          <button className="ui disabled button" type="disabled">
            Berhenti
          </button>
        </Form>
      );
    }
    return element;
  }